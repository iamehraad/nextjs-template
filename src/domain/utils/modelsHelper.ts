import { Dispatch } from "@reduxjs/toolkit";
import { ModelConfigs, ModelResponseGeneration } from "../types/Config.types";
import { BaseModels, Model } from "../types/Model.types";
import { requestUrls } from "./requestUrls";
import {
  setCfgScale,
  setMaxLength,
  setMaxTokenCount,
  setSeed,
  setSteps,
  setTemperature,
  setTopK,
  setTopP,
} from "../store/slices/configSlice";

export function modelFinder(id: number | string): Model {
  return (Object.values(models).find((model) => model.id === id) ??
    models.TITAN_TEXT_G1_EXPRESS_V1) as Model;
}

export function modelNameFinder(id: number | string) {
  return modelFinder(id)?.name ?? "AI";
}

export function modelFinderFromName(name: string) {
  return (Object.values(models).find((model) => model.name === name) ??
    models.TITAN_TEXT_G1_EXPRESS_V1) as Model;
}

export const models: { [key: string]: Model } = {
  CLAUDE_V2_1: {
    id: "anthropic.claude-v2:1",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_V2_1,
    terascore: 54,
    isAvailable: true,
    modelResponseType: ModelResponseGeneration.TEXT,
    information: [
      {
        title: "About model",
        description:
          "An update to Claude 2 that features double the context window, plus improvements across reliability, hallucination rates, and evidence-based accuracy in long document and RAG contexts.",
      },
      {
        title: "Supported use cases",
        description:
          "Question answering, information extraction, removing PII, content generation, multiple choice classification, Roleplay, comparing text, summarization, document Q&A with citation",
      },
      {
        title: "Model attributes",
        description:
          "Text generation, Conversation, Complex reasoning & analysis",
      },
      {
        title: "Supported languages",
        description: "English and multiple other languages",
      },
    ],
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 500,
        available: true,
        value: 300,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 200000,
        available: true,
        value: 4096,
      },
    },
  },
  CLAUDE_V2: {
    id: "anthropic.claude-v2",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_V2,
    terascore: 49,
    isAvailable: true,
    modelResponseType: ModelResponseGeneration.TEXT,
    information: [
      {
        title: "About model",
        description:
          "Anthropic's highly capable model across a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction following.",
      },
      {
        title: "Supported use cases",
        description:
          "Question answering, information extraction, removing PII, content generation, multiple choice classification, Roleplay, comparing text, summarization, document Q&A with citation",
      },
      {
        title: "Model attributes",
        description:
          "Text generation, Conversation, Complex reasoning & analysis",
      },
      {
        title: "Supported languages",
        description: "English and multiple other languages",
      },
    ],
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 500,
        available: true,
        value: 300,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 100000,
        available: true,
        value: 4096,
      },
    },
  },
  CLAUDE_3_HAIKU_V1: {
    id: "anthropic.claude-3-haiku-20240307-v1:0",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_3_HAIKU_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 59,
    availableConfigs: {
      maxTokenCount: {
        min: 1,
        max: 200000,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Claude 3 Haiku is Anthropic's fastest, most compact model for near-instant responsiveness. It answers simple queries and requests with speed. Customers will be able to build seamless AI experiences that mimic human interactions. Claude 3 Haiku can process images and return text outputs, and features a 200K context window.",
      },
      {
        title: "Supported use cases",
        description:
          "Customer interactions: quick and accurate support in live interactions, translations. Content moderation: catch risky behavior or customer requests. Cost-saving tasks: optimized logistics, inventory management, extract knowledge from unstructured data",
      },
      {
        title: "Model attributes",
        description: "Image to text, conversation, chat optimized",
      },
      {
        title: "Supported languages",
        description: "English and multiple other languages",
      },
    ],
  },
  CLAUDE_3_SONNET_V1: {
    id: "anthropic.claude-3-sonnet-20240229-v1:0",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_3_SONNET_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 79,
    availableConfigs: {
      maxTokenCount: {
        min: 1,
        max: 200000,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Claude 3 Sonnet by Anthropic strikes the ideal balance between intelligence and speed—particularly for enterprise workloads. It offers maximum utility at a lower price than competitors, and is engineered to be the dependable, high-endurance workhorse for scaled AI deployments. Claude 3 Sonnet can process images and return text outputs, and features a 200K context window.",
      },
      {
        title: "Supported use cases",
        description:
          "Data processing: RAG or search & retrieval over vast amounts of knowledge. Sales: product recommendations, forecasting, targeted marketing. Time-saving tasks: code generation, quality control, parse text from images",
      },
      {
        title: "Model attributes",
        description:
          "Image to text & code, multilingual conversation, complex reasoning & analysis\n",
      },
      {
        title: "Supported languages",
        description: "English and multiple other languages",
      },
    ],
  },
  CLAUDE_3_5_SONNET: {
    id: "claude-3-5-sonnet-20240620",
    url: requestUrls.anthropic,
    name: BaseModels.CLAUDE_3_5_SONNET,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 88,
    availableConfigs: {
      maxTokenCount: {
        min: 1,
        max: 20000,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of our mid-tier model, Claude 3 Sonnet.",
      },
      {
        title: "Supported use cases",
        description:
          "Claude 3.5 excels at complex tasks like customer support, coding, data analysis, and visual processing. It streamlines workflows, generates insights, and produces high-quality, natural-sounding content.",
      },
      {
        title: "Model attributes",
        description:
          "Code generation, text generation, complex reasoning and analysis",
      },
      {
        title: "Supported languages",
        description: "English, Spanish, Japanese, and multiple other languages",
      },
    ],
  },
  CLAUDE_3_OPUS_V1: {
    id: "anthropic.claude-3-opus-20240229-v1:0",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_3_OPUS_V1,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  CLAUDE_INSTANT_V1_2: {
    id: "anthropic.claude-instant-v1",
    url: requestUrls.claude,
    name: BaseModels.CLAUDE_INSTANT_V1_2,
    terascore: 44,
    isAvailable: true,
    modelResponseType: ModelResponseGeneration.TEXT,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 500,
        available: true,
        value: 300,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 100000,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "A fast, affordable yet still very capable model, which can handle a range of tasks including casual dialogue, text analysis, summarization, and document question-answering",
      },
      {
        title: "Supported use cases",
        description:
          "Question answering, information extraction, removing PII, content generation, multiple choice classification, Roleplay, comparing text, summarization, document Q&A with citation",
      },
      {
        title: "Model attributes",
        description: "Text generation, Conversation",
      },
      {
        title: "Supported languages",
        description: "English and multiple other languages",
      },
    ],
  },
  COMMAND_V14_7: {
    id: "cohere.command-text-v14",
    url: requestUrls.command,
    name: BaseModels.COMMAND_V14_7,
    terascore: 35,
    isAvailable: true,
    modelResponseType: ModelResponseGeneration.TEXT,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Command is Cohere's flagship text generation model. It is trained to follow user commands and to be instantly useful in practical business applications.",
      },
      {
        title: "Supported use cases",
        description:
          "Summarization, copywriting, dialogue, extraction, and question answering.",
      },
      {
        title: "Model attributes",
        description: "Text generation, Instruction following",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  COMMAND_LIGHT_V14_7: {
    id: "cohere.command-light-text-v14",
    url: requestUrls.command,
    name: BaseModels.COMMAND_LIGHT_V14_7,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 29,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Cohere's Command-Light is a generative model that responds well with instruction-like prompts. This model provides customers with an unbeatable balance of quality, cost-effectiveness, and low-latency inference.",
      },
      {
        title: "Supported use cases",
        description:
          "Summarization, copywriting, dialogue, extraction, and question answering.",
      },
      {
        title: "Model attributes",
        description: "Text generation, Instruction following",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  COMMAND_R_V1: {
    id: 9,
    url: requestUrls.command,
    name: BaseModels.COMMAND_R_V1,
    terascore: 28,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: false,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Command R is a generative language model optimized for long-context tasks and large scale production workloads.",
      },
      {
        title: "Supported use cases",
        description:
          "Chat, text generation, text summarization, RAG on large amounts of data, Q&A, function calling",
      },
      {
        title: "Model attributes",
        description:
          "Natural language processing, Text generation, Text summarization",
      },
      {
        title: "Supported languages",
        description:
          "English, French, Spanish, Italian, German, Portuguese, Japanese, Korean, Arabic, and Chinese",
      },
    ],
  },
  COMMAND_R_PLUS_V1: {
    id: 10,
    url: requestUrls.command,
    name: BaseModels.COMMAND_R_PLUS_V1,
    terascore: 33,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: false,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Command R+ is a highly performant generative language model optimized for large scale production workloads.",
      },
      {
        title: "Supported use cases",
        description:
          "Complex RAG on large amounts of data, Q&A, Multi-step tool use, chat, text generation, text summarization",
      },
      {
        title: "Model attributes",
        description:
          "Natural language processing, Text generation, Text summarization",
      },
      {
        title: "Supported languages",
        description:
          "English, French, Spanish, Italian, German, Portuguese, Japanese, Korean, Arabic, and Chinese",
      },
    ],
  },
  EMBED_ENGLISH_V3: {
    id: 11,
    url: "",
    name: BaseModels.EMBED_ENGLISH_V3,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  EMBED_MULTILINGUAL_V3: {
    id: 12,
    url: "",
    name: BaseModels.EMBED_MULTILINGUAL_V3,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  JURASSIC_2_MID_V1: {
    id: "ai21.j2-mid-v1",
    url: requestUrls.jurassic,
    name: BaseModels.JURASSIC_2_MID_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 40,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 500,
        available: true,
        value: 300,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 8191,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Jurassic-2 Mid is less powerful than Ultra, yet carefully designed to strike the right balance between exceptional quality and affordability. Jurassic-2 Mid can be applied to any language comprehension or generation task including question answering, summarization, long-form copy generation, advanced information extraction and many others.",
      },
      {
        title: "Supported use cases",
        description:
          "Open book question answering, summarization, draft generation, information extraction, ideation",
      },
      {
        title: "Model attributes",
        description: "Text, Classification, Insert/edit, Math",
      },
      {
        title: "Supported languages",
        description:
          "English, Spanish, French, German, Portuguese, Italian, Dutch",
      },
    ],
  },
  JURASSIC_2_ULTRA_V1: {
    id: "ai21.j2-ultra-v1",
    url: requestUrls.jurassic,
    name: BaseModels.JURASSIC_2_ULTRA_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 47,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 500,
        available: true,
        value: 300,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 8191,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Jurassic-2 Ultra is AI21’s most powerful model for complex tasks that require advanced text generation and comprehension. Popular use cases include question answering, summarization, long-form copy generation, advanced information extraction, and more.",
      },
      {
        title: "Supported use cases",
        description:
          "Open book question answering, summarization, draft generation, information extraction, ideation",
      },
      {
        title: "Model attributes",
        description: "Text, Classification, Insert/edit",
      },
      {
        title: "Supported languages",
        description:
          "English, Spanish, French, German, Portuguese, Italian, Dutch",
      },
    ],
  },
  LLAMA_2_13B_V1: {
    id: "meta.llama2-13b-chat-v1",
    url: requestUrls.llama,
    name: BaseModels.LLAMA_2_13B_V1,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  LLAMA_2_70B_V1: {
    id: "meta.llama2-70b-chat-v1",
    url: requestUrls.llama,
    name: BaseModels.LLAMA_2_70B_V1,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  LLAMA_3_70B_INSTRUCT_V1: {
    id: "meta.llama3-70b-instruct-v1:0",
    url: requestUrls.llama,
    name: BaseModels.LLAMA_3_70B_INSTRUCT_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 73,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 2048,
        available: true,
        value: 2048,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Meta Llama 3 is an accessible, open large language model (LLM) designed for developers, researchers, and businesses to build, experiment, and responsibly scale their generative AI ideas. Part of a foundational system, it serves as a bedrock for innovation in the global community. Ideal for content creation, conversational AI, language understanding, R&D, and Enterprise applications.",
      },
      {
        title: "Supported use cases",
        description:
          "Llama 3 is intended for commercial and research use in English. Fine-tuned chat models are intended for chat based applications.",
      },
      {
        title: "Model attributes",
        description:
          "Language modeling, Dialog systems, Code generation, Following instructions, Sentiment analysis with nuances in reasoning, Text classification with improved accuracy and nuance, Text summarization with accuracy and nuance",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  LLAMA_3_8B_INSTRUCT_V1: {
    id: "meta.llama3-8b-instruct-v1:0",
    url: requestUrls.llama,
    name: BaseModels.LLAMA_3_8B_INSTRUCT_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 65,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 2048,
        available: true,
        value: 2048,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Meta Llama 3 is an accessible, open large language model (LLM) designed for developers, researchers, and businesses to build, experiment, and responsibly scale their generative AI ideas. Part of a foundational system, it serves as a bedrock for innovation in the global community. Ideal for limited computational power and resources, edge devices, and faster training times.",
      },
      {
        title: "Supported use cases",
        description:
          "Llama 3 is intended for commercial and research use in English. Fine-tuned chat models are intended for chat based applications.",
      },
      {
        title: "Model attributes",
        description:
          "Text summarization, Text classification, Sentiment analysis",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  MISTRAL_7B_INSTRUCT_V0_2: {
    id: 21,
    url: requestUrls.mistral,
    name: BaseModels.MISTRAL_7B_INSTRUCT_V0_2,
    terascore: 47,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 200,
        available: true,
        value: 100,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "A 7B dense Transformer, fast-deployed and easily customisable. Small, yet powerful for a variety of use cases. Supports English and code, and a 32k context window.",
      },
      {
        title: "Model attributes",
        description: "Classification, Text generation, Code generation\n",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  MISTRAL_LARGE_2402: {
    id: 22,
    url: requestUrls.mistral,
    name: BaseModels.MISTRAL_LARGE_2402,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 72,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 200,
        available: true,
        value: 100,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "The most advanced Mistral AI Large Language model capable of handling any language task including complex multilingual reasoning, text understanding, transformation, and code generation.",
      },
      {
        title: "Model attributes",
        description:
          "Complex reasoning & analysis, Text generation, Code generation, RAG, Agents",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  MIXTRAL_8X7B_INSTRUCT_V0_1: {
    id: 23,
    url: requestUrls.mistral,
    name: BaseModels.MIXTRAL_8X7B_INSTRUCT_V0_1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 84,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topK: {
        min: 0,
        max: 200,
        available: true,
        value: 100,
        step: 1,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "A 7B sparse Mixture-of-Experts model with stronger capabilities than Mistral 7B. Uses 12B active parameters out of 45B total. Supports multiple languages, code and 32k context window.",
      },
      {
        title: "Model attributes",
        description:
          "Complex reasoning & analysis, Text generation, Code generation",
      },
      {
        title: "Supported languages",
        description: "English, French, Italian, German and Spanish",
      },
    ],
  },
  SDXL_1_0_V1_0: {
    id: 24,
    url: requestUrls.sdxl,
    name: BaseModels.SDXL_1_0_V1_0,
    terascore: 70,
    modelResponseType: ModelResponseGeneration.IMAGE,
    isAvailable: true,
    availableConfigs: {
      cfgScale: {
        min: 1,
        max: 35,
        available: true,
        value: 7,
        step: 1,
      },
      seed: {
        min: 1,
        max: 4294967295,
        available: true,
        value: 100,
        step: 1,
      },
      steps: {
        min: 10,
        max: 100,
        available: true,
        value: 100,
        step: 1,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "SDXL generates images of high quality in virtually any art style and is the best open model for photorealism. Distinct images can be prompted without having any particular ‘feel’ imparted by the model, ensuring absolute freedom of style. SDXL 1.0 is particularly well-tuned for vibrant and accurate colors, with better contrast, lighting, and shadows than its predecessor, all in native 1024x1024 resolution. In addition, SDXL can generate concepts that are notoriously difficult for image models to render, such as hands and text or spatially arranged compositions (e.g., a woman in the background chasing a dog in the foreground).",
      },
      {
        title: "Model attributes",
        description: "Diffusion-based text-to-image generation",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  TITAN_EMBEDDINGS_G1_TEXT_V1_2: {
    id: 25,
    url: requestUrls.titan,
    name: BaseModels.TITAN_EMBEDDINGS_G1_TEXT_V1_2,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  TITAN_IMAGE_GENERATOR_G1_V1: {
    id: 26,
    url: requestUrls.titan,
    name: BaseModels.TITAN_IMAGE_GENERATOR_G1_V1,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  TITAN_MULTIMODAL_EMBEDDINGS_G1_V1: {
    id: 27,
    url: requestUrls.titan,
    name: BaseModels.TITAN_MULTIMODAL_EMBEDDINGS_G1_V1,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  TITAN_TEXT_EMBEDDINGS_V2_V2_0: {
    id: 28,
    url: requestUrls.titan,
    name: BaseModels.TITAN_TEXT_EMBEDDINGS_V2_V2_0,
    modelResponseType: ModelResponseGeneration.UNKNOWN,
    isAvailable: false,
  },
  TITAN_TEXT_G1_EXPRESS_V1: {
    id: "amazon.titan-text-express-v1",
    url: requestUrls.titan,
    name: BaseModels.TITAN_TEXT_G1_EXPRESS_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    terascore: 56,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 8192,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Amazon Titan Text Express has a context length of up to 8,000 tokens, making it well-suited for a wide range of advanced, general language tasks such as open-ended text generation and conversational chat, as well as support within Retrieval Augmented Generation (RAG). At launch, the model is optimized for English, with multilingual support for more than 100 additional languages available in preview.",
      },
      {
        title: "Model attributes",
        description:
          "Text generation, Code generation, Rich text formatting, Orchestration (Agents), Fine Tuning",
      },
      {
        title: "Supported languages",
        description: "English (GA), Multilingual in 100+ languages",
      },
    ],
  },
  TITAN_TEXT_G1_LITE_V1: {
    id: "amazon.titan-text-lite-v1",
    url: requestUrls.titan,
    name: BaseModels.TITAN_TEXT_G1_LITE_V1,
    modelResponseType: ModelResponseGeneration.TEXT,
    terascore: 58,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: true,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "Amazon Titan Text Lite is a light weight efficient model ideal for fine-tuning for English-language tasks, including like summarization and copywriting, where customers want a smaller, more cost-effective model that is also highly customizable.",
      },
      {
        title: "Model attributes",
        description:
          "Text generation, Code generation, Rich text formatting, Orchestration (Agents), Fine Tuning",
      },
      {
        title: "Supported languages",
        description: "English",
      },
    ],
  },
  OPEN_AI_GPT_4O: {
    id: "gpt-4o",
    url: requestUrls.openAi,
    name: BaseModels.GPT_4O,
    terascore: 86,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: false,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "GPT-4o (“o” for “omni”) is our most advanced model. It is multimodal (accepting text or image inputs and outputting text), and it has the same high intelligence as GPT-4 Turbo but is much more efficient—it generates text 2x faster and is 50% cheaper. Additionally, GPT-4o has the best vision and performance across non-English languages of any of our models. GPT-4o is available in the OpenAI API to paying customers.",
      },
    ],
  },
  OPEN_AI_GPT_4O_MINI: {
    id: "gpt-4o-mini",
    url: requestUrls.openAi,
    name: BaseModels.GPT_4O_MINI,
    terascore: 56,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 16384,
        available: false,
        value: 16384,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "GPT-4o mini (“o” for “omni”) is our most advanced model in the small models category, and our cheapest model yet. It is multimodal (accepting text or image inputs and outputting text), has higher intelligence than gpt-3.5-turbo but is just as fast. It is meant to be used for smaller tasks, including vision tasks.",
      },
    ],
  },
  OPEN_AI_GPT_4_TURBO: {
    id: "gpt-4-turbo",
    url: requestUrls.openAi,
    terascore: 70,
    name: BaseModels.GPT_4_TURBO,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: false,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "GPT-4 is a large multimodal model (accepting text or image inputs and outputting text) that can solve difficult problems with greater accuracy than any of our previous models, thanks to its broader general knowledge and advanced reasoning capabilities.",
      },
    ],
  },
  OPEN_AI_GPT_4: {
    id: "gpt-4",
    url: requestUrls.openAi,
    terascore: 83,
    name: BaseModels.GPT_4,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 8192,
        available: false,
        value: 8192,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "GPT-4 is a large multimodal model (accepting text or image inputs and outputting text) that can solve difficult problems with greater accuracy than any of our previous models, thanks to its broader general knowledge and advanced reasoning capabilities.",
      },
    ],
  },
  OPEN_AI_GPT_3_5_TURBO: {
    id: "gpt-3.5-turbo",
    url: requestUrls.openAi,
    terascore: 64,
    name: BaseModels.GPT_3_5_TURBO,
    modelResponseType: ModelResponseGeneration.TEXT,
    isAvailable: true,
    availableConfigs: {
      temperature: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      topP: {
        min: 0.1,
        max: 1.0,
        available: true,
        value: 1.0,
      },
      maxTokenCount: {
        min: 1,
        max: 4096,
        available: false,
        value: 4096,
      },
    },
    information: [
      {
        title: "About model",
        description:
          "GPT-3.5 Turbo models can understand and generate natural language or code and have been optimized for chat using the Chat Completions API but work well for non-chat tasks as well.The latest GPT-3.5 Turbo model with higher accuracy at responding in requested formats and a fix for a bug which caused a text encoding issue for non-English language function calls. ",
      },
    ],
  },
};

export function generateAvailableConfigOptions(
  configs: ModelConfigs,
  dispatch: Dispatch,
  stateConfigs: ModelConfigs,
) {
  let options = [];
  if (configs.maxLength?.available) {
    options.push({
      label: "Maximum Length",
      value: stateConfigs.maxLength?.value ?? configs.maxLength.value,
      sliderMax: configs.maxLength.max,
      sliderMin: configs.maxLength.min ?? 0,
      step: 1,
      onValueChange: (value: number) => dispatch(setMaxLength(value)),
      description:
        "Maximum number of tokens to generate. Responses are not guaranted to fill up to the maximum desired length.",
    });
  }
  if (configs.topK?.available) {
    options.push({
      label: "Top K",
      value: stateConfigs.topK?.value ?? configs.topK.value,
      sliderMax: configs.topK.max,
      sliderMin: configs.topK.min,
      step: configs.topK.step ?? 0.1,
      onValueChange: (value: number) => dispatch(setTopK(value)),
      description:
        "Can be used to reduce repetitiveness of generated tokens. The higher the value,  the stronger a penalty is applied to  previously present tokens, proportional  to how many times they have already  appeared in the prompt or prior generation.",
    });
  }
  if (configs.topP?.available) {
    options.push({
      label: "Top P",
      value: stateConfigs.topP?.value ?? configs.topP.value,
      sliderMax: configs.topP.max,
      sliderMin: configs.topP.min,
      step: 0.1,
      onValueChange: (value: number) => dispatch(setTopP(value)),
      description:
        "If set to float less than 1, only the smallest set of most probable tokens with probabilities that add up to top_p or higher are kept for generation.",
    });
  }
  if (configs.temperature?.available) {
    options.push({
      label: "Temperature",
      value: stateConfigs.temperature?.value ?? configs.temperature.value,
      sliderMax: configs.temperature.max,
      sliderMin: configs.temperature.min,
      step: 0.1,
      onValueChange: (value: number) => dispatch(setTemperature(value)),
      description:
        "A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations.",
    });
  }
  if (configs.maxTokenCount?.available) {
    options.push({
      label: "Max token count",
      value: stateConfigs.maxTokenCount?.value ?? configs.maxTokenCount.value,
      sliderMax: configs.maxTokenCount.max,
      sliderMin: configs.maxTokenCount.min,
      step: 1,
      onValueChange: (value: number) => dispatch(setMaxTokenCount(value)),
      description:
        "Specify the maximum number of tokens to generate in the response. Maximum token limits are strictly enforced.",
    });
  }
  if (configs.cfgScale?.available) {
    options.push({
      label: "Cfg scale",
      value: stateConfigs.cfgScale?.value ?? configs.cfgScale.value,
      sliderMax: configs.cfgScale.max,
      sliderMin: configs.cfgScale.min,
      step: 1,
      onValueChange: (value: number) => dispatch(setCfgScale(value)),
      description:
        "Determines how much the final image portrays the prompt. Use a lower number to increase randomness in the generation.",
    });
  }
  if (configs.steps?.available) {
    options.push({
      label: "Steps",
      value: stateConfigs.steps?.value ?? configs.steps.value,
      sliderMax: configs.steps.max,
      sliderMin: configs.steps.min,
      step: 1,
      onValueChange: (value: number) => dispatch(setSteps(value)),
      description:
        "Generation step determines how many times the image is sampled. More steps can result in a more accurate result.",
    });
  }
  if (configs.seed?.available) {
    options.push({
      label: "Seed",
      value: stateConfigs.seed?.value ?? configs.seed.value,
      sliderMax: configs.seed.max,
      sliderMin: configs.seed.min,
      step: 1,
      onValueChange: (value: number) => dispatch(setSeed(value)),
      description:
        "The seed determines the initial noise setting. Use the same seed and the same settings as a previous run to allow inference to create a similar image. If you don't set this value, or the value is 0, it is set as a random number.",
    });
  }
  return options;
}

export function generateConfigForModelInvoke(
  availableConfigs: ModelConfigs,
  customConfigs: ModelConfigs,
) {
  let configs: { [key: string]: number } = {};
  Object.keys(availableConfigs).forEach((item) => {
    const itemKey: keyof ModelConfigs = item as keyof ModelConfigs;
    configs[itemKey] =
      customConfigs[itemKey]?.value ?? availableConfigs[itemKey]?.value!;
  });
  return configs;
}
