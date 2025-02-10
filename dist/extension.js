"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@vscode/prompt-tsx/dist/base/openai.js
var require_openai = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/openai.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseTokensPerName = exports2.BaseTokensPerMessage = exports2.BaseTokensPerCompletion = exports2.ChatRole = void 0;
    var ChatRole;
    (function(ChatRole2) {
      ChatRole2["System"] = "system";
      ChatRole2["User"] = "user";
      ChatRole2["Assistant"] = "assistant";
      ChatRole2["Function"] = "function";
      ChatRole2["Tool"] = "tool";
    })(ChatRole || (exports2.ChatRole = ChatRole = {}));
    exports2.BaseTokensPerCompletion = 3;
    exports2.BaseTokensPerMessage = 3;
    exports2.BaseTokensPerName = 1;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/jsonTypes.js
var require_jsonTypes = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/jsonTypes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.forEachNode = void 0;
    function forEachNode(node, fn) {
      fn(node);
      if (node.type === 1) {
        for (const child of node.children) {
          forEachNode(child, fn);
        }
      }
    }
    exports2.forEachNode = forEachNode;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/tsx.js
var require_tsx = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/tsx.js"() {
    "use strict";
    function _vscpp(ctor, props, ...children) {
      return { ctor, props, children: children.flat() };
    }
    function _vscppf() {
      throw new Error(`This should not be invoked!`);
    }
    _vscppf.isFragment = true;
    globalThis.vscpp = _vscpp;
    globalThis.vscppf = _vscppf;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/promptElement.js
var require_promptElement = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/promptElement.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PromptElement = void 0;
    require_tsx();
    var PromptElement2 = class {
      get priority() {
        return this.props.priority ?? Number.MAX_SAFE_INTEGER;
      }
      get insertLineBreakBefore() {
        return true;
      }
      constructor(props) {
        this.props = props;
      }
    };
    exports2.PromptElement = PromptElement2;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/promptElements.js
var require_promptElements = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/promptElements.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ToolResult = exports2.PrioritizedList = exports2.TextChunk = exports2.ToolMessage = exports2.FunctionMessage = exports2.AssistantMessage = exports2.UserMessage = exports2.SystemMessage = exports2.BaseChatMessage = exports2.isChatMessagePromptElement = void 0;
    var _1 = require_base();
    var JSONT = require_jsonTypes();
    var openai_1 = require_openai();
    var promptElement_1 = require_promptElement();
    function isChatMessagePromptElement(element) {
      return element instanceof SystemMessage || element instanceof UserMessage2 || element instanceof AssistantMessage2;
    }
    exports2.isChatMessagePromptElement = isChatMessagePromptElement;
    var BaseChatMessage = class extends promptElement_1.PromptElement {
      render() {
        return vscpp(vscppf, null, this.props.children);
      }
    };
    exports2.BaseChatMessage = BaseChatMessage;
    var SystemMessage = class extends BaseChatMessage {
      constructor(props) {
        props.role = openai_1.ChatRole.System;
        super(props);
      }
    };
    exports2.SystemMessage = SystemMessage;
    var UserMessage2 = class extends BaseChatMessage {
      constructor(props) {
        props.role = openai_1.ChatRole.User;
        super(props);
      }
    };
    exports2.UserMessage = UserMessage2;
    var AssistantMessage2 = class extends BaseChatMessage {
      constructor(props) {
        props.role = openai_1.ChatRole.Assistant;
        super(props);
      }
    };
    exports2.AssistantMessage = AssistantMessage2;
    var WHITESPACE_RE = /\s+/g;
    var FunctionMessage = class extends BaseChatMessage {
      constructor(props) {
        props.role = openai_1.ChatRole.Function;
        super(props);
      }
    };
    exports2.FunctionMessage = FunctionMessage;
    var ToolMessage = class extends BaseChatMessage {
      constructor(props) {
        props.role = openai_1.ChatRole.Tool;
        super(props);
      }
    };
    exports2.ToolMessage = ToolMessage;
    var TextChunk2 = class extends promptElement_1.PromptElement {
      async prepare(sizing, _progress, token) {
        const breakOn = this.props.breakOnWhitespace ? WHITESPACE_RE : this.props.breakOn;
        if (!breakOn) {
          return vscpp(vscppf, null, this.props.children);
        }
        let fullText = "";
        const intrinsics = [];
        for (const child of this.props.children || []) {
          if (child && typeof child === "object") {
            if (typeof child.ctor !== "string") {
              throw new Error("TextChunk children must be text literals or intrinsic attributes.");
            } else if (child.ctor === "br") {
              fullText += "\n";
            } else {
              intrinsics.push(child);
            }
          } else if (child != null) {
            fullText += child;
          }
        }
        const text = await getTextContentBelowBudget(sizing, breakOn, fullText, token);
        return vscpp(
          vscppf,
          null,
          intrinsics,
          text
        );
      }
      render(piece) {
        return piece;
      }
    };
    exports2.TextChunk = TextChunk2;
    async function getTextContentBelowBudget(sizing, breakOn, fullText, cancellation) {
      if (breakOn instanceof RegExp) {
        if (!breakOn.global) {
          throw new Error(`\`breakOn\` expression must have the global flag set (got ${breakOn})`);
        }
        breakOn.lastIndex = 0;
      }
      let outputText = "";
      let lastIndex = -1;
      while (lastIndex < fullText.length) {
        let index;
        if (typeof breakOn === "string") {
          index = fullText.indexOf(breakOn, lastIndex === -1 ? 0 : lastIndex + breakOn.length);
        } else {
          index = breakOn.exec(fullText)?.index ?? -1;
        }
        if (index === -1) {
          index = fullText.length;
        }
        const next = outputText + fullText.slice(Math.max(0, lastIndex), index);
        if (await sizing.countTokens(next, cancellation) > sizing.tokenBudget) {
          return outputText;
        }
        outputText = next;
        lastIndex = index;
      }
      return outputText;
    }
    var PrioritizedList = class extends promptElement_1.PromptElement {
      render() {
        const children = this.props.children;
        if (!children) {
          return;
        }
        return vscpp(vscppf, null, children.map((child, i) => {
          child.props ?? (child.props = {});
          child.props.priority = this.props.descending ? (
            // First element in array of children has highest priority
            this.props.priority - i
          ) : (
            // Last element in array of children has highest priority
            this.props.priority - children.length + i
          );
          return child;
        }));
      }
    };
    exports2.PrioritizedList = PrioritizedList;
    var ToolResult = class extends promptElement_1.PromptElement {
      render() {
        if (this.props.data.hasOwnProperty(_1.contentType)) {
          return vscpp("elementJSON", { data: this.rebasePriority(this.props.data[_1.contentType]) });
        } else {
          return vscpp(UserMessage2, { priority: this.priority }, this.props.data.toString());
        }
      }
      /**
       * Modifies priorities of all elements in the tree to fractional increments
       * past `this.priorty`.
       */
      rebasePriority(data) {
        if (this.priority === void 0) {
          return data;
        }
        const cloned = structuredClone(data);
        let maxPriorityInChildren = 1;
        JSONT.forEachNode(cloned.node, (node) => {
          if (node.priority === Number.MAX_SAFE_INTEGER) {
            node.priority = void 0;
          }
          if (node.priority !== void 0) {
            maxPriorityInChildren = Math.max(maxPriorityInChildren, node.priority);
          }
        });
        JSONT.forEachNode(cloned.node, (node) => {
          const frac = (node.priority ?? maxPriorityInChildren + 1) / (maxPriorityInChildren + 2);
          node.priority = this.priority + frac;
        });
        return cloned;
      }
    };
    exports2.ToolResult = ToolResult;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/vs/nls.js
var require_nls = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/vs/nls.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getConfiguredDefaultLocale = exports2.localize2 = exports2.localize = void 0;
    function _format(message, args) {
      let result;
      if (args.length === 0) {
        result = message;
      } else {
        result = message.replace(/\{(\d+)\}/g, function(match, rest) {
          const index = rest[0];
          return typeof args[index] !== "undefined" ? args[index] : match;
        });
      }
      return result;
    }
    function localize(data, message, ...args) {
      return _format(message, args);
    }
    exports2.localize = localize;
    function localize2(data, message, ...args) {
      const res = _format(message, args);
      return {
        original: res,
        value: res
      };
    }
    exports2.localize2 = localize2;
    function getConfiguredDefaultLocale(_) {
      return void 0;
    }
    exports2.getConfiguredDefaultLocale = getConfiguredDefaultLocale;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/platform.js
var require_platform = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/platform.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBigSurOrNewer = exports2.isAndroid = exports2.isEdge = exports2.isSafari = exports2.isFirefox = exports2.isChrome = exports2.isLittleEndian = exports2.OS = exports2.setTimeout0 = exports2.setTimeout0IsFaster = exports2.translationsConfigFile = exports2.platformLocale = exports2.locale = exports2.Language = exports2.language = exports2.userAgent = exports2.platform = exports2.isCI = exports2.isMobile = exports2.isIOS = exports2.webWorkerOrigin = exports2.isWebWorker = exports2.isWeb = exports2.isElectron = exports2.isNative = exports2.isLinuxSnap = exports2.isLinux = exports2.isMacintosh = exports2.isWindows = exports2.PlatformToString = exports2.LANGUAGE_DEFAULT = void 0;
    var nls = require_nls();
    exports2.LANGUAGE_DEFAULT = "en";
    var _isWindows = false;
    var _isMacintosh = false;
    var _isLinux = false;
    var _isLinuxSnap = false;
    var _isNative = false;
    var _isWeb = false;
    var _isElectron = false;
    var _isIOS = false;
    var _isCI = false;
    var _isMobile = false;
    var _locale = void 0;
    var _language = exports2.LANGUAGE_DEFAULT;
    var _platformLocale = exports2.LANGUAGE_DEFAULT;
    var _translationsConfigFile = void 0;
    var _userAgent = void 0;
    var $globalThis = globalThis;
    var nodeProcess = void 0;
    if (typeof $globalThis.vscode !== "undefined" && typeof $globalThis.vscode.process !== "undefined") {
      nodeProcess = $globalThis.vscode.process;
    } else if (typeof process !== "undefined") {
      nodeProcess = process;
    }
    var isElectronProcess = typeof nodeProcess?.versions?.electron === "string";
    var isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
    if (typeof nodeProcess === "object") {
      _isWindows = nodeProcess.platform === "win32";
      _isMacintosh = nodeProcess.platform === "darwin";
      _isLinux = nodeProcess.platform === "linux";
      _isLinuxSnap = _isLinux && !!nodeProcess.env["SNAP"] && !!nodeProcess.env["SNAP_REVISION"];
      _isElectron = isElectronProcess;
      _isCI = !!nodeProcess.env["CI"] || !!nodeProcess.env["BUILD_ARTIFACTSTAGINGDIRECTORY"];
      _locale = exports2.LANGUAGE_DEFAULT;
      _language = exports2.LANGUAGE_DEFAULT;
      const rawNlsConfig = nodeProcess.env["VSCODE_NLS_CONFIG"];
      if (rawNlsConfig) {
        try {
          const nlsConfig = JSON.parse(rawNlsConfig);
          const resolved = nlsConfig.availableLanguages["*"];
          _locale = nlsConfig.locale;
          _platformLocale = nlsConfig.osLocale;
          _language = resolved ? resolved : exports2.LANGUAGE_DEFAULT;
          _translationsConfigFile = nlsConfig._translationsConfigFile;
        } catch (e) {
        }
      }
      _isNative = true;
    } else if (typeof navigator === "object" && !isElectronRenderer) {
      _userAgent = navigator.userAgent;
      _isWindows = _userAgent.indexOf("Windows") >= 0;
      _isMacintosh = _userAgent.indexOf("Macintosh") >= 0;
      _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
      _isLinux = _userAgent.indexOf("Linux") >= 0;
      _isMobile = _userAgent?.indexOf("Mobi") >= 0;
      _isWeb = true;
      const configuredLocale = nls.getConfiguredDefaultLocale(
        // This call _must_ be done in the file that calls `nls.getConfiguredDefaultLocale`
        // to ensure that the NLS AMD Loader plugin has been loaded and configured.
        // This is because the loader plugin decides what the default locale is based on
        // how it's able to resolve the strings.
        nls.localize({ key: "ensureLoaderPluginIsLoaded", comment: ["{Locked}"] }, "_")
      );
      _locale = configuredLocale || exports2.LANGUAGE_DEFAULT;
      _language = _locale;
      _platformLocale = navigator.language;
    } else {
      console.error("Unable to resolve platform.");
    }
    function PlatformToString(platform) {
      switch (platform) {
        case 0:
          return "Web";
        case 1:
          return "Mac";
        case 2:
          return "Linux";
        case 3:
          return "Windows";
      }
    }
    exports2.PlatformToString = PlatformToString;
    var _platform = 0;
    if (_isMacintosh) {
      _platform = 1;
    } else if (_isWindows) {
      _platform = 3;
    } else if (_isLinux) {
      _platform = 2;
    }
    exports2.isWindows = _isWindows;
    exports2.isMacintosh = _isMacintosh;
    exports2.isLinux = _isLinux;
    exports2.isLinuxSnap = _isLinuxSnap;
    exports2.isNative = _isNative;
    exports2.isElectron = _isElectron;
    exports2.isWeb = _isWeb;
    exports2.isWebWorker = _isWeb && typeof $globalThis.importScripts === "function";
    exports2.webWorkerOrigin = exports2.isWebWorker ? $globalThis.origin : void 0;
    exports2.isIOS = _isIOS;
    exports2.isMobile = _isMobile;
    exports2.isCI = _isCI;
    exports2.platform = _platform;
    exports2.userAgent = _userAgent;
    exports2.language = _language;
    var Language;
    (function(Language2) {
      function value() {
        return exports2.language;
      }
      Language2.value = value;
      function isDefaultVariant() {
        if (exports2.language.length === 2) {
          return exports2.language === "en";
        } else if (exports2.language.length >= 3) {
          return exports2.language[0] === "e" && exports2.language[1] === "n" && exports2.language[2] === "-";
        } else {
          return false;
        }
      }
      Language2.isDefaultVariant = isDefaultVariant;
      function isDefault() {
        return exports2.language === "en";
      }
      Language2.isDefault = isDefault;
    })(Language || (exports2.Language = Language = {}));
    exports2.locale = _locale;
    exports2.platformLocale = _platformLocale;
    exports2.translationsConfigFile = _translationsConfigFile;
    exports2.setTimeout0IsFaster = typeof $globalThis.postMessage === "function" && !$globalThis.importScripts;
    exports2.setTimeout0 = (() => {
      if (exports2.setTimeout0IsFaster) {
        const pending = [];
        $globalThis.addEventListener("message", (e) => {
          if (e.data && e.data.vscodeScheduleAsyncWork) {
            for (let i = 0, len = pending.length; i < len; i++) {
              const candidate = pending[i];
              if (candidate.id === e.data.vscodeScheduleAsyncWork) {
                pending.splice(i, 1);
                candidate.callback();
                return;
              }
            }
          }
        });
        let lastId = 0;
        return (callback) => {
          const myId = ++lastId;
          pending.push({
            id: myId,
            callback
          });
          $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, "*");
        };
      }
      return (callback) => setTimeout(callback);
    })();
    exports2.OS = _isMacintosh || _isIOS ? 2 : _isWindows ? 1 : 3;
    var _isLittleEndian = true;
    var _isLittleEndianComputed = false;
    function isLittleEndian() {
      if (!_isLittleEndianComputed) {
        _isLittleEndianComputed = true;
        const test = new Uint8Array(2);
        test[0] = 1;
        test[1] = 2;
        const view = new Uint16Array(test.buffer);
        _isLittleEndian = view[0] === (2 << 8) + 1;
      }
      return _isLittleEndian;
    }
    exports2.isLittleEndian = isLittleEndian;
    exports2.isChrome = !!(exports2.userAgent && exports2.userAgent.indexOf("Chrome") >= 0);
    exports2.isFirefox = !!(exports2.userAgent && exports2.userAgent.indexOf("Firefox") >= 0);
    exports2.isSafari = !!(!exports2.isChrome && (exports2.userAgent && exports2.userAgent.indexOf("Safari") >= 0));
    exports2.isEdge = !!(exports2.userAgent && exports2.userAgent.indexOf("Edg/") >= 0);
    exports2.isAndroid = !!(exports2.userAgent && exports2.userAgent.indexOf("Android") >= 0);
    function isBigSurOrNewer(osVersion) {
      return parseFloat(osVersion) >= 20;
    }
    exports2.isBigSurOrNewer = isBigSurOrNewer;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/process.js
var require_process = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/process.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arch = exports2.platform = exports2.env = exports2.cwd = void 0;
    var platform_1 = require_platform();
    var safeProcess;
    var vscodeGlobal = globalThis.vscode;
    if (typeof vscodeGlobal !== "undefined" && typeof vscodeGlobal.process !== "undefined") {
      const sandboxProcess = vscodeGlobal.process;
      safeProcess = {
        get platform() {
          return sandboxProcess.platform;
        },
        get arch() {
          return sandboxProcess.arch;
        },
        get env() {
          return sandboxProcess.env;
        },
        cwd() {
          return sandboxProcess.cwd();
        }
      };
    } else if (typeof process !== "undefined") {
      safeProcess = {
        get platform() {
          return process.platform;
        },
        get arch() {
          return process.arch;
        },
        get env() {
          return process.env;
        },
        cwd() {
          return process.env["VSCODE_CWD"] || process.cwd();
        }
      };
    } else {
      safeProcess = {
        // Supported
        get platform() {
          return platform_1.isWindows ? "win32" : platform_1.isMacintosh ? "darwin" : "linux";
        },
        get arch() {
          return void 0;
        },
        // Unsupported
        get env() {
          return {};
        },
        cwd() {
          return "/";
        }
      };
    }
    exports2.cwd = safeProcess.cwd;
    exports2.env = safeProcess.env;
    exports2.platform = safeProcess.platform;
    exports2.arch = safeProcess.arch;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/path.js
var require_path = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.delimiter = exports2.sep = exports2.toNamespacedPath = exports2.parse = exports2.format = exports2.extname = exports2.basename = exports2.dirname = exports2.relative = exports2.resolve = exports2.join = exports2.isAbsolute = exports2.normalize = exports2.posix = exports2.win32 = void 0;
    var process2 = require_process();
    var CHAR_UPPERCASE_A = 65;
    var CHAR_LOWERCASE_A = 97;
    var CHAR_UPPERCASE_Z = 90;
    var CHAR_LOWERCASE_Z = 122;
    var CHAR_DOT = 46;
    var CHAR_FORWARD_SLASH = 47;
    var CHAR_BACKWARD_SLASH = 92;
    var CHAR_COLON = 58;
    var CHAR_QUESTION_MARK = 63;
    var ErrorInvalidArgType = class extends Error {
      constructor(name, expected, actual) {
        let determiner;
        if (typeof expected === "string" && expected.indexOf("not ") === 0) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        const type = name.indexOf(".") !== -1 ? "property" : "argument";
        let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
        msg += `. Received type ${typeof actual}`;
        super(msg);
        this.code = "ERR_INVALID_ARG_TYPE";
      }
    };
    function validateObject(pathObject, name) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new ErrorInvalidArgType(name, "Object", pathObject);
      }
    }
    function validateString(value, name) {
      if (typeof value !== "string") {
        throw new ErrorInvalidArgType(name, "string", value);
      }
    }
    var platformIsWin32 = process2.platform === "win32";
    function isPathSeparator(code) {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    }
    function isPosixPathSeparator(code) {
      return code === CHAR_FORWARD_SLASH;
    }
    function isWindowsDeviceRoot(code) {
      return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
    }
    function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
      let res = "";
      let lastSegmentLength = 0;
      let lastSlash = -1;
      let dots = 0;
      let code = 0;
      for (let i = 0; i <= path.length; ++i) {
        if (i < path.length) {
          code = path.charCodeAt(i);
        } else if (isPathSeparator2(code)) {
          break;
        } else {
          code = CHAR_FORWARD_SLASH;
        }
        if (isPathSeparator2(code)) {
          if (lastSlash === i - 1 || dots === 1) {
          } else if (dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
              if (res.length > 2) {
                const lastSlashIndex = res.lastIndexOf(separator);
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                }
                lastSlash = i;
                dots = 0;
                continue;
              } else if (res.length !== 0) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              res += res.length > 0 ? `${separator}..` : "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0) {
              res += `${separator}${path.slice(lastSlash + 1, i)}`;
            } else {
              res = path.slice(lastSlash + 1, i);
            }
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === CHAR_DOT && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      validateObject(pathObject, "pathObject");
      const dir = pathObject.dir || pathObject.root;
      const base = pathObject.base || `${pathObject.name || ""}${pathObject.ext || ""}`;
      if (!dir) {
        return base;
      }
      return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
    }
    exports2.win32 = {
      // path.resolve([from ...], to)
      resolve(...pathSegments) {
        let resolvedDevice = "";
        let resolvedTail = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1; i--) {
          let path;
          if (i >= 0) {
            path = pathSegments[i];
            validateString(path, "path");
            if (path.length === 0) {
              continue;
            }
          } else if (resolvedDevice.length === 0) {
            path = process2.cwd();
          } else {
            path = process2.env[`=${resolvedDevice}`] || process2.cwd();
            if (path === void 0 || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
              path = `${resolvedDevice}\\`;
            }
          }
          const len = path.length;
          let rootEnd = 0;
          let device = "";
          let isAbsolute = false;
          const code = path.charCodeAt(0);
          if (len === 1) {
            if (isPathSeparator(code)) {
              rootEnd = 1;
              isAbsolute = true;
            }
          } else if (isPathSeparator(code)) {
            isAbsolute = true;
            if (isPathSeparator(path.charCodeAt(1))) {
              let j = 2;
              let last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                const firstPart = path.slice(last, j);
                last = j;
                while (j < len && isPathSeparator(path.charCodeAt(j))) {
                  j++;
                }
                if (j < len && j !== last) {
                  last = j;
                  while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                  }
                  if (j === len || j !== last) {
                    device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                    rootEnd = j;
                  }
                }
              }
            } else {
              rootEnd = 1;
            }
          } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            device = path.slice(0, 2);
            rootEnd = 2;
            if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
              isAbsolute = true;
              rootEnd = 3;
            }
          }
          if (device.length > 0) {
            if (resolvedDevice.length > 0) {
              if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                continue;
              }
            } else {
              resolvedDevice = device;
            }
          }
          if (resolvedAbsolute) {
            if (resolvedDevice.length > 0) {
              break;
            }
          } else {
            resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
            resolvedAbsolute = isAbsolute;
            if (isAbsolute && resolvedDevice.length > 0) {
              break;
            }
          }
        }
        resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
        return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
      },
      normalize(path) {
        validateString(path, "path");
        const len = path.length;
        if (len === 0) {
          return ".";
        }
        let rootEnd = 0;
        let device;
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        if (len === 1) {
          return isPosixPathSeparator(code) ? "\\" : path;
        }
        if (isPathSeparator(code)) {
          isAbsolute = true;
          if (isPathSeparator(path.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              const firstPart = path.slice(last, j);
              last = j;
              while (j < len && isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  return `\\\\${firstPart}\\${path.slice(last)}\\`;
                }
                if (j !== last) {
                  device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                  rootEnd = j;
                }
              }
            }
          } else {
            rootEnd = 1;
          }
        } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
          device = path.slice(0, 2);
          rootEnd = 2;
          if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
            isAbsolute = true;
            rootEnd = 3;
          }
        }
        let tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
        if (tail.length === 0 && !isAbsolute) {
          tail = ".";
        }
        if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
          tail += "\\";
        }
        if (device === void 0) {
          return isAbsolute ? `\\${tail}` : tail;
        }
        return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
      },
      isAbsolute(path) {
        validateString(path, "path");
        const len = path.length;
        if (len === 0) {
          return false;
        }
        const code = path.charCodeAt(0);
        return isPathSeparator(code) || // Possible device root
        len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
      },
      join(...paths) {
        if (paths.length === 0) {
          return ".";
        }
        let joined;
        let firstPart;
        for (let i = 0; i < paths.length; ++i) {
          const arg = paths[i];
          validateString(arg, "path");
          if (arg.length > 0) {
            if (joined === void 0) {
              joined = firstPart = arg;
            } else {
              joined += `\\${arg}`;
            }
          }
        }
        if (joined === void 0) {
          return ".";
        }
        let needsReplace = true;
        let slashCount = 0;
        if (typeof firstPart === "string" && isPathSeparator(firstPart.charCodeAt(0))) {
          ++slashCount;
          const firstLen = firstPart.length;
          if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
            ++slashCount;
            if (firstLen > 2) {
              if (isPathSeparator(firstPart.charCodeAt(2))) {
                ++slashCount;
              } else {
                needsReplace = false;
              }
            }
          }
        }
        if (needsReplace) {
          while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
            slashCount++;
          }
          if (slashCount >= 2) {
            joined = `\\${joined.slice(slashCount)}`;
          }
        }
        return exports2.win32.normalize(joined);
      },
      // It will solve the relative path from `from` to `to`, for instance:
      //  from = 'C:\\orandea\\test\\aaa'
      //  to = 'C:\\orandea\\impl\\bbb'
      // The output of the function should be: '..\\..\\impl\\bbb'
      relative(from, to) {
        validateString(from, "from");
        validateString(to, "to");
        if (from === to) {
          return "";
        }
        const fromOrig = exports2.win32.resolve(from);
        const toOrig = exports2.win32.resolve(to);
        if (fromOrig === toOrig) {
          return "";
        }
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to) {
          return "";
        }
        let fromStart = 0;
        while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
          fromStart++;
        }
        let fromEnd = from.length;
        while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
          fromEnd--;
        }
        const fromLen = fromEnd - fromStart;
        let toStart = 0;
        while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
          toStart++;
        }
        let toEnd = to.length;
        while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
          toEnd--;
        }
        const toLen = toEnd - toStart;
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
          const fromCode = from.charCodeAt(fromStart + i);
          if (fromCode !== to.charCodeAt(toStart + i)) {
            break;
          } else if (fromCode === CHAR_BACKWARD_SLASH) {
            lastCommonSep = i;
          }
        }
        if (i !== length) {
          if (lastCommonSep === -1) {
            return toOrig;
          }
        } else {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
              return toOrig.slice(toStart + i + 1);
            }
            if (i === 2) {
              return toOrig.slice(toStart + i);
            }
          }
          if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
              lastCommonSep = i;
            } else if (i === 2) {
              lastCommonSep = 3;
            }
          }
          if (lastCommonSep === -1) {
            lastCommonSep = 0;
          }
        }
        let out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
            out += out.length === 0 ? ".." : "\\..";
          }
        }
        toStart += lastCommonSep;
        if (out.length > 0) {
          return `${out}${toOrig.slice(toStart, toEnd)}`;
        }
        if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
          ++toStart;
        }
        return toOrig.slice(toStart, toEnd);
      },
      toNamespacedPath(path) {
        if (typeof path !== "string" || path.length === 0) {
          return path;
        }
        const resolvedPath = exports2.win32.resolve(path);
        if (resolvedPath.length <= 2) {
          return path;
        }
        if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
          if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
            const code = resolvedPath.charCodeAt(2);
            if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
              return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
            }
          }
        } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          return `\\\\?\\${resolvedPath}`;
        }
        return path;
      },
      dirname(path) {
        validateString(path, "path");
        const len = path.length;
        if (len === 0) {
          return ".";
        }
        let rootEnd = -1;
        let offset = 0;
        const code = path.charCodeAt(0);
        if (len === 1) {
          return isPathSeparator(code) ? path : ".";
        }
        if (isPathSeparator(code)) {
          rootEnd = offset = 1;
          if (isPathSeparator(path.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  return path;
                }
                if (j !== last) {
                  rootEnd = offset = j + 1;
                }
              }
            }
          }
        } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
          rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
          offset = rootEnd;
        }
        let end = -1;
        let matchedSlash = true;
        for (let i = len - 1; i >= offset; --i) {
          if (isPathSeparator(path.charCodeAt(i))) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) {
          if (rootEnd === -1) {
            return ".";
          }
          end = rootEnd;
        }
        return path.slice(0, end);
      },
      basename(path, ext) {
        if (ext !== void 0) {
          validateString(ext, "ext");
        }
        validateString(path, "path");
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
          start = 2;
        }
        if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
          if (ext === path) {
            return "";
          }
          let extIdx = ext.length - 1;
          let firstNonSlashEnd = -1;
          for (i = path.length - 1; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) {
            end = firstNonSlashEnd;
          } else if (end === -1) {
            end = path.length;
          }
          return path.slice(start, end);
        }
        for (i = path.length - 1; i >= start; --i) {
          if (isPathSeparator(path.charCodeAt(i))) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) {
          return "";
        }
        return path.slice(start, end);
      },
      extname(path) {
        validateString(path, "path");
        let start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
          start = startPart = 2;
        }
        for (let i = path.length - 1; i >= start; --i) {
          const code = path.charCodeAt(i);
          if (isPathSeparator(code)) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path.slice(startDot, end);
      },
      format: _format.bind(null, "\\"),
      parse(path) {
        validateString(path, "path");
        const ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path.length === 0) {
          return ret;
        }
        const len = path.length;
        let rootEnd = 0;
        let code = path.charCodeAt(0);
        if (len === 1) {
          if (isPathSeparator(code)) {
            ret.root = ret.dir = path;
            return ret;
          }
          ret.base = ret.name = path;
          return ret;
        }
        if (isPathSeparator(code)) {
          rootEnd = 1;
          if (isPathSeparator(path.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                  j++;
                }
                if (j === len) {
                  rootEnd = j;
                } else if (j !== last) {
                  rootEnd = j + 1;
                }
              }
            }
          }
        } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
          if (len <= 2) {
            ret.root = ret.dir = path;
            return ret;
          }
          rootEnd = 2;
          if (isPathSeparator(path.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path;
              return ret;
            }
            rootEnd = 3;
          }
        }
        if (rootEnd > 0) {
          ret.root = path.slice(0, rootEnd);
        }
        let startDot = -1;
        let startPart = rootEnd;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        let preDotState = 0;
        for (; i >= rootEnd; --i) {
          code = path.charCodeAt(i);
          if (isPathSeparator(code)) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (end !== -1) {
          if (startDot === -1 || // We saw a non-dot character immediately before the dot
          preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
          preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            ret.base = ret.name = path.slice(startPart, end);
          } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
            ret.ext = path.slice(startDot, end);
          }
        }
        if (startPart > 0 && startPart !== rootEnd) {
          ret.dir = path.slice(0, startPart - 1);
        } else {
          ret.dir = ret.root;
        }
        return ret;
      },
      sep: "\\",
      delimiter: ";",
      win32: null,
      posix: null
    };
    var posixCwd = (() => {
      if (platformIsWin32) {
        const regexp = /\\/g;
        return () => {
          const cwd = process2.cwd().replace(regexp, "/");
          return cwd.slice(cwd.indexOf("/"));
        };
      }
      return () => process2.cwd();
    })();
    exports2.posix = {
      // path.resolve([from ...], to)
      resolve(...pathSegments) {
        let resolvedPath = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          const path = i >= 0 ? pathSegments[i] : posixCwd();
          validateString(path, "path");
          if (path.length === 0) {
            continue;
          }
          resolvedPath = `${path}/${resolvedPath}`;
          resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
        if (resolvedAbsolute) {
          return `/${resolvedPath}`;
        }
        return resolvedPath.length > 0 ? resolvedPath : ".";
      },
      normalize(path) {
        validateString(path, "path");
        if (path.length === 0) {
          return ".";
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
        path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
        if (path.length === 0) {
          if (isAbsolute) {
            return "/";
          }
          return trailingSeparator ? "./" : ".";
        }
        if (trailingSeparator) {
          path += "/";
        }
        return isAbsolute ? `/${path}` : path;
      },
      isAbsolute(path) {
        validateString(path, "path");
        return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
      },
      join(...paths) {
        if (paths.length === 0) {
          return ".";
        }
        let joined;
        for (let i = 0; i < paths.length; ++i) {
          const arg = paths[i];
          validateString(arg, "path");
          if (arg.length > 0) {
            if (joined === void 0) {
              joined = arg;
            } else {
              joined += `/${arg}`;
            }
          }
        }
        if (joined === void 0) {
          return ".";
        }
        return exports2.posix.normalize(joined);
      },
      relative(from, to) {
        validateString(from, "from");
        validateString(to, "to");
        if (from === to) {
          return "";
        }
        from = exports2.posix.resolve(from);
        to = exports2.posix.resolve(to);
        if (from === to) {
          return "";
        }
        const fromStart = 1;
        const fromEnd = from.length;
        const fromLen = fromEnd - fromStart;
        const toStart = 1;
        const toLen = to.length - toStart;
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
          const fromCode = from.charCodeAt(fromStart + i);
          if (fromCode !== to.charCodeAt(toStart + i)) {
            break;
          } else if (fromCode === CHAR_FORWARD_SLASH) {
            lastCommonSep = i;
          }
        }
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
              return to.slice(toStart + i + 1);
            }
            if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
        }
        let out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            out += out.length === 0 ? ".." : "/..";
          }
        }
        return `${out}${to.slice(toStart + lastCommonSep)}`;
      },
      toNamespacedPath(path) {
        return path;
      },
      dirname(path) {
        validateString(path, "path");
        if (path.length === 0) {
          return ".";
        }
        const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let end = -1;
        let matchedSlash = true;
        for (let i = path.length - 1; i >= 1; --i) {
          if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) {
          return hasRoot ? "/" : ".";
        }
        if (hasRoot && end === 1) {
          return "//";
        }
        return path.slice(0, end);
      },
      basename(path, ext) {
        if (ext !== void 0) {
          validateString(ext, "ext");
        }
        validateString(path, "path");
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
          if (ext === path) {
            return "";
          }
          let extIdx = ext.length - 1;
          let firstNonSlashEnd = -1;
          for (i = path.length - 1; i >= 0; --i) {
            const code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) {
            end = firstNonSlashEnd;
          } else if (end === -1) {
            end = path.length;
          }
          return path.slice(start, end);
        }
        for (i = path.length - 1; i >= 0; --i) {
          if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) {
          return "";
        }
        return path.slice(start, end);
      },
      extname(path) {
        validateString(path, "path");
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        for (let i = path.length - 1; i >= 0; --i) {
          const code = path.charCodeAt(i);
          if (code === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path.slice(startDot, end);
      },
      format: _format.bind(null, "/"),
      parse(path) {
        validateString(path, "path");
        const ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path.length === 0) {
          return ret;
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        let preDotState = 0;
        for (; i >= start; --i) {
          const code = path.charCodeAt(i);
          if (code === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === CHAR_DOT) {
            if (startDot === -1) {
              startDot = i;
            } else if (preDotState !== 1) {
              preDotState = 1;
            }
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (end !== -1) {
          const start2 = startPart === 0 && isAbsolute ? 1 : startPart;
          if (startDot === -1 || // We saw a non-dot character immediately before the dot
          preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
          preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            ret.base = ret.name = path.slice(start2, end);
          } else {
            ret.name = path.slice(start2, startDot);
            ret.base = path.slice(start2, end);
            ret.ext = path.slice(startDot, end);
          }
        }
        if (startPart > 0) {
          ret.dir = path.slice(0, startPart - 1);
        } else if (isAbsolute) {
          ret.dir = "/";
        }
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    exports2.posix.win32 = exports2.win32.win32 = exports2.win32;
    exports2.posix.posix = exports2.win32.posix = exports2.posix;
    exports2.normalize = platformIsWin32 ? exports2.win32.normalize : exports2.posix.normalize;
    exports2.isAbsolute = platformIsWin32 ? exports2.win32.isAbsolute : exports2.posix.isAbsolute;
    exports2.join = platformIsWin32 ? exports2.win32.join : exports2.posix.join;
    exports2.resolve = platformIsWin32 ? exports2.win32.resolve : exports2.posix.resolve;
    exports2.relative = platformIsWin32 ? exports2.win32.relative : exports2.posix.relative;
    exports2.dirname = platformIsWin32 ? exports2.win32.dirname : exports2.posix.dirname;
    exports2.basename = platformIsWin32 ? exports2.win32.basename : exports2.posix.basename;
    exports2.extname = platformIsWin32 ? exports2.win32.extname : exports2.posix.extname;
    exports2.format = platformIsWin32 ? exports2.win32.format : exports2.posix.format;
    exports2.parse = platformIsWin32 ? exports2.win32.parse : exports2.posix.parse;
    exports2.toNamespacedPath = platformIsWin32 ? exports2.win32.toNamespacedPath : exports2.posix.toNamespacedPath;
    exports2.sep = platformIsWin32 ? exports2.win32.sep : exports2.posix.sep;
    exports2.delimiter = platformIsWin32 ? exports2.win32.delimiter : exports2.posix.delimiter;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/uri.js
var require_uri = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/vs/common/uri.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriToFsPath = exports2.isUriComponents = exports2.URI = void 0;
    var paths = require_path();
    var platform_1 = require_platform();
    var _schemePattern = /^\w[\w\d+.-]*$/;
    var _singleSlashStart = /^\//;
    var _doubleSlashStart = /^\/\//;
    function _validateUri(ret, _strict) {
      if (!ret.scheme && _strict) {
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
      }
      if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error("[UriError]: Scheme contains illegal characters.");
      }
      if (ret.path) {
        if (ret.authority) {
          if (!_singleSlashStart.test(ret.path)) {
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
          }
        } else {
          if (_doubleSlashStart.test(ret.path)) {
            throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
          }
        }
      }
    }
    function _schemeFix(scheme, _strict) {
      if (!scheme && !_strict) {
        return "file";
      }
      return scheme;
    }
    function _referenceResolution(scheme, path) {
      switch (scheme) {
        case "https":
        case "http":
        case "file":
          if (!path) {
            path = _slash;
          } else if (path[0] !== _slash) {
            path = _slash + path;
          }
          break;
      }
      return path;
    }
    var _empty = "";
    var _slash = "/";
    var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    var URI = class _URI {
      static isUri(thing) {
        if (thing instanceof _URI) {
          return true;
        }
        if (!thing) {
          return false;
        }
        return typeof thing.authority === "string" && typeof thing.fragment === "string" && typeof thing.path === "string" && typeof thing.query === "string" && typeof thing.scheme === "string" && typeof thing.fsPath === "string" && typeof thing.with === "function" && typeof thing.toString === "function";
      }
      /**
       * @internal
       */
      constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
        if (typeof schemeOrData === "object") {
          this.scheme = schemeOrData.scheme || _empty;
          this.authority = schemeOrData.authority || _empty;
          this.path = schemeOrData.path || _empty;
          this.query = schemeOrData.query || _empty;
          this.fragment = schemeOrData.fragment || _empty;
        } else {
          this.scheme = _schemeFix(schemeOrData, _strict);
          this.authority = authority || _empty;
          this.path = _referenceResolution(this.scheme, path || _empty);
          this.query = query || _empty;
          this.fragment = fragment || _empty;
          _validateUri(this, _strict);
        }
      }
      // ---- filesystem path -----------------------
      /**
       * Returns a string representing the corresponding file system path of this URI.
       * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
       * platform specific path separator.
       *
       * * Will *not* validate the path for invalid characters and semantics.
       * * Will *not* look at the scheme of this URI.
       * * The result shall *not* be used for display purposes but for accessing a file on disk.
       *
       *
       * The *difference* to `URI#path` is the use of the platform specific separator and the handling
       * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
       *
       * ```ts
          const u = URI.parse('file://server/c$/folder/file.txt')
          u.authority === 'server'
          u.path === '/shares/c$/file.txt'
          u.fsPath === '\\server\c$\folder\file.txt'
      ```
       *
       * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
       * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
       * with URIs that represent files on disk (`file` scheme).
       */
      get fsPath() {
        return uriToFsPath(this, false);
      }
      // ---- modify to new -------------------------
      with(change) {
        if (!change) {
          return this;
        }
        let { scheme, authority, path, query, fragment } = change;
        if (scheme === void 0) {
          scheme = this.scheme;
        } else if (scheme === null) {
          scheme = _empty;
        }
        if (authority === void 0) {
          authority = this.authority;
        } else if (authority === null) {
          authority = _empty;
        }
        if (path === void 0) {
          path = this.path;
        } else if (path === null) {
          path = _empty;
        }
        if (query === void 0) {
          query = this.query;
        } else if (query === null) {
          query = _empty;
        }
        if (fragment === void 0) {
          fragment = this.fragment;
        } else if (fragment === null) {
          fragment = _empty;
        }
        if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
          return this;
        }
        return new Uri2(scheme, authority, path, query, fragment);
      }
      // ---- parse & validate ------------------------
      /**
       * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
       * `file:///usr/home`, or `scheme:with/path`.
       *
       * @param value A string which represents an URI (see `URI#toString`).
       */
      static parse(value, _strict = false) {
        const match = _regexp.exec(value);
        if (!match) {
          return new Uri2(_empty, _empty, _empty, _empty, _empty);
        }
        return new Uri2(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
      }
      /**
       * Creates a new URI from a file system path, e.g. `c:\my\files`,
       * `/usr/home`, or `\\server\share\some\path`.
       *
       * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
       * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
       * `URI.parse('file://' + path)` because the path might contain characters that are
       * interpreted (# and ?). See the following sample:
       * ```ts
      const good = URI.file('/coding/c#/project1');
      good.scheme === 'file';
      good.path === '/coding/c#/project1';
      good.fragment === '';
      const bad = URI.parse('file://' + '/coding/c#/project1');
      bad.scheme === 'file';
      bad.path === '/coding/c'; // path is now broken
      bad.fragment === '/project1';
      ```
       *
       * @param path A file system path (see `URI#fsPath`)
       */
      static file(path) {
        let authority = _empty;
        if (platform_1.isWindows) {
          path = path.replace(/\\/g, _slash);
        }
        if (path[0] === _slash && path[1] === _slash) {
          const idx = path.indexOf(_slash, 2);
          if (idx === -1) {
            authority = path.substring(2);
            path = _slash;
          } else {
            authority = path.substring(2, idx);
            path = path.substring(idx) || _slash;
          }
        }
        return new Uri2("file", authority, path, _empty, _empty);
      }
      /**
       * Creates new URI from uri components.
       *
       * Unless `strict` is `true` the scheme is defaults to be `file`. This function performs
       * validation and should be used for untrusted uri components retrieved from storage,
       * user input, command arguments etc
       */
      static from(components, strict) {
        const result = new Uri2(components.scheme, components.authority, components.path, components.query, components.fragment, strict);
        return result;
      }
      /**
       * Join a URI path with path fragments and normalizes the resulting path.
       *
       * @param uri The input URI.
       * @param pathFragment The path fragment to add to the URI path.
       * @returns The resulting URI.
       */
      static joinPath(uri, ...pathFragment) {
        if (!uri.path) {
          throw new Error(`[UriError]: cannot call joinPath on URI without path`);
        }
        let newPath;
        if (platform_1.isWindows && uri.scheme === "file") {
          newPath = _URI.file(paths.win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
        } else {
          newPath = paths.posix.join(uri.path, ...pathFragment);
        }
        return uri.with({ path: newPath });
      }
      // ---- printing/externalize ---------------------------
      /**
       * Creates a string representation for this URI. It's guaranteed that calling
       * `URI.parse` with the result of this function creates an URI which is equal
       * to this URI.
       *
       * * The result shall *not* be used for display purposes but for externalization or transport.
       * * The result will be encoded using the percentage encoding and encoding happens mostly
       * ignore the scheme-specific encoding rules.
       *
       * @param skipEncoding Do not encode the result, default is `false`
       */
      toString(skipEncoding = false) {
        return _asFormatted(this, skipEncoding);
      }
      toJSON() {
        return this;
      }
      static revive(data) {
        if (!data) {
          return data;
        } else if (data instanceof _URI) {
          return data;
        } else {
          const result = new Uri2(data);
          result._formatted = data.external ?? null;
          result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
          return result;
        }
      }
    };
    exports2.URI = URI;
    function isUriComponents(thing) {
      if (!thing || typeof thing !== "object") {
        return false;
      }
      return typeof thing.scheme === "string" && (typeof thing.authority === "string" || typeof thing.authority === "undefined") && (typeof thing.path === "string" || typeof thing.path === "undefined") && (typeof thing.query === "string" || typeof thing.query === "undefined") && (typeof thing.fragment === "string" || typeof thing.fragment === "undefined");
    }
    exports2.isUriComponents = isUriComponents;
    var _pathSepMarker = platform_1.isWindows ? 1 : void 0;
    var Uri2 = class extends URI {
      constructor() {
        super(...arguments);
        this._formatted = null;
        this._fsPath = null;
      }
      get fsPath() {
        if (!this._fsPath) {
          this._fsPath = uriToFsPath(this, false);
        }
        return this._fsPath;
      }
      toString(skipEncoding = false) {
        if (!skipEncoding) {
          if (!this._formatted) {
            this._formatted = _asFormatted(this, false);
          }
          return this._formatted;
        } else {
          return _asFormatted(this, true);
        }
      }
      toJSON() {
        const res = {
          $mid: 1
          /* MarshalledId.Uri */
        };
        if (this._fsPath) {
          res.fsPath = this._fsPath;
          res._sep = _pathSepMarker;
        }
        if (this._formatted) {
          res.external = this._formatted;
        }
        if (this.path) {
          res.path = this.path;
        }
        if (this.scheme) {
          res.scheme = this.scheme;
        }
        if (this.authority) {
          res.authority = this.authority;
        }
        if (this.query) {
          res.query = this.query;
        }
        if (this.fragment) {
          res.fragment = this.fragment;
        }
        return res;
      }
    };
    var encodeTable = {
      [
        58
        /* CharCode.Colon */
      ]: "%3A",
      // gen-delims
      [
        47
        /* CharCode.Slash */
      ]: "%2F",
      [
        63
        /* CharCode.QuestionMark */
      ]: "%3F",
      [
        35
        /* CharCode.Hash */
      ]: "%23",
      [
        91
        /* CharCode.OpenSquareBracket */
      ]: "%5B",
      [
        93
        /* CharCode.CloseSquareBracket */
      ]: "%5D",
      [
        64
        /* CharCode.AtSign */
      ]: "%40",
      [
        33
        /* CharCode.ExclamationMark */
      ]: "%21",
      // sub-delims
      [
        36
        /* CharCode.DollarSign */
      ]: "%24",
      [
        38
        /* CharCode.Ampersand */
      ]: "%26",
      [
        39
        /* CharCode.SingleQuote */
      ]: "%27",
      [
        40
        /* CharCode.OpenParen */
      ]: "%28",
      [
        41
        /* CharCode.CloseParen */
      ]: "%29",
      [
        42
        /* CharCode.Asterisk */
      ]: "%2A",
      [
        43
        /* CharCode.Plus */
      ]: "%2B",
      [
        44
        /* CharCode.Comma */
      ]: "%2C",
      [
        59
        /* CharCode.Semicolon */
      ]: "%3B",
      [
        61
        /* CharCode.Equals */
      ]: "%3D",
      [
        32
        /* CharCode.Space */
      ]: "%20"
    };
    function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
      let res = void 0;
      let nativeEncodePos = -1;
      for (let pos = 0; pos < uriComponent.length; pos++) {
        const code = uriComponent.charCodeAt(pos);
        if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 95 || code === 126 || isPath && code === 47 || isAuthority && code === 91 || isAuthority && code === 93 || isAuthority && code === 58) {
          if (nativeEncodePos !== -1) {
            res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
            nativeEncodePos = -1;
          }
          if (res !== void 0) {
            res += uriComponent.charAt(pos);
          }
        } else {
          if (res === void 0) {
            res = uriComponent.substr(0, pos);
          }
          const escaped = encodeTable[code];
          if (escaped !== void 0) {
            if (nativeEncodePos !== -1) {
              res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
              nativeEncodePos = -1;
            }
            res += escaped;
          } else if (nativeEncodePos === -1) {
            nativeEncodePos = pos;
          }
        }
      }
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
      }
      return res !== void 0 ? res : uriComponent;
    }
    function encodeURIComponentMinimal(path) {
      let res = void 0;
      for (let pos = 0; pos < path.length; pos++) {
        const code = path.charCodeAt(pos);
        if (code === 35 || code === 63) {
          if (res === void 0) {
            res = path.substr(0, pos);
          }
          res += encodeTable[code];
        } else {
          if (res !== void 0) {
            res += path[pos];
          }
        }
      }
      return res !== void 0 ? res : path;
    }
    function uriToFsPath(uri, keepDriveLetterCasing) {
      let value;
      if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
        value = `//${uri.authority}${uri.path}`;
      } else if (uri.path.charCodeAt(0) === 47 && (uri.path.charCodeAt(1) >= 65 && uri.path.charCodeAt(1) <= 90 || uri.path.charCodeAt(1) >= 97 && uri.path.charCodeAt(1) <= 122) && uri.path.charCodeAt(2) === 58) {
        if (!keepDriveLetterCasing) {
          value = uri.path[1].toLowerCase() + uri.path.substr(2);
        } else {
          value = uri.path.substr(1);
        }
      } else {
        value = uri.path;
      }
      if (platform_1.isWindows) {
        value = value.replace(/\//g, "\\");
      }
      return value;
    }
    exports2.uriToFsPath = uriToFsPath;
    function _asFormatted(uri, skipEncoding) {
      const encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
      let res = "";
      let { scheme, authority, path, query, fragment } = uri;
      if (scheme) {
        res += scheme;
        res += ":";
      }
      if (authority || scheme === "file") {
        res += _slash;
        res += _slash;
      }
      if (authority) {
        let idx = authority.indexOf("@");
        if (idx !== -1) {
          const userinfo = authority.substr(0, idx);
          authority = authority.substr(idx + 1);
          idx = userinfo.lastIndexOf(":");
          if (idx === -1) {
            res += encoder(userinfo, false, false);
          } else {
            res += encoder(userinfo.substr(0, idx), false, false);
            res += ":";
            res += encoder(userinfo.substr(idx + 1), false, true);
          }
          res += "@";
        }
        authority = authority.toLowerCase();
        idx = authority.lastIndexOf(":");
        if (idx === -1) {
          res += encoder(authority, false, true);
        } else {
          res += encoder(authority.substr(0, idx), false, true);
          res += authority.substr(idx);
        }
      }
      if (path) {
        if (path.length >= 3 && path.charCodeAt(0) === 47 && path.charCodeAt(2) === 58) {
          const code = path.charCodeAt(1);
          if (code >= 65 && code <= 90) {
            path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`;
          }
        } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
          const code = path.charCodeAt(0);
          if (code >= 65 && code <= 90) {
            path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`;
          }
        }
        res += encoder(path, true, false);
      }
      if (query) {
        res += "?";
        res += encoder(query, false, false);
      }
      if (fragment) {
        res += "#";
        res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
      }
      return res;
    }
    function decodeURIComponentGraceful(str) {
      try {
        return decodeURIComponent(str);
      } catch {
        if (str.length > 3) {
          return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
        } else {
          return str;
        }
      }
    }
    var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function percentDecode(str) {
      if (!str.match(_rEncodedAsHex)) {
        return str;
      }
      return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
    }
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/results.js
var require_results = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/results.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PromptReference = exports2.ChatResponseReferencePartStatusKind = exports2.PromptMetadata = void 0;
    var uri_1 = require_uri();
    var PromptMetadata = class {
      toString() {
        return Object.getPrototypeOf(this).constructor.name;
      }
    };
    exports2.PromptMetadata = PromptMetadata;
    var ChatResponseReferencePartStatusKind;
    (function(ChatResponseReferencePartStatusKind2) {
      ChatResponseReferencePartStatusKind2[ChatResponseReferencePartStatusKind2["Complete"] = 1] = "Complete";
      ChatResponseReferencePartStatusKind2[ChatResponseReferencePartStatusKind2["Partial"] = 2] = "Partial";
      ChatResponseReferencePartStatusKind2[ChatResponseReferencePartStatusKind2["Omitted"] = 3] = "Omitted";
    })(ChatResponseReferencePartStatusKind || (exports2.ChatResponseReferencePartStatusKind = ChatResponseReferencePartStatusKind = {}));
    var PromptReference = class _PromptReference {
      static fromJSON(json) {
        const uriOrLocation = (v) => "scheme" in v ? uri_1.URI.from(v) : { uri: uri_1.URI.from(v.uri), range: v.range };
        return new _PromptReference("variableName" in json.anchor ? { variableName: json.anchor.variableName, value: json.anchor.value && uriOrLocation(json.anchor.value) } : uriOrLocation(json.anchor), json.iconPath && ("scheme" in json.iconPath ? uri_1.URI.from(json.iconPath) : "light" in json.iconPath ? { light: uri_1.URI.from(json.iconPath.light), dark: uri_1.URI.from(json.iconPath.dark) } : json.iconPath), json.options);
      }
      constructor(anchor, iconPath, options) {
        this.anchor = anchor;
        this.iconPath = iconPath;
        this.options = options;
      }
      toJSON() {
        return {
          anchor: this.anchor,
          iconPath: this.iconPath,
          options: this.options
        };
      }
    };
    exports2.PromptReference = PromptReference;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/util/arrays.js
var require_arrays = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/util/arrays.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.coalesce = void 0;
    function coalesce(array) {
      return array.filter((e) => !!e);
    }
    exports2.coalesce = coalesce;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/promptRenderer.js
var require_promptRenderer = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/promptRenderer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PromptRenderer = exports2.MetadataMap = void 0;
    var openai_1 = require_openai();
    var promptElements_1 = require_promptElements();
    var results_1 = require_results();
    var arrays_1 = require_arrays();
    var MetadataMap;
    (function(MetadataMap2) {
      MetadataMap2.empty = {
        get: () => void 0
      };
    })(MetadataMap || (exports2.MetadataMap = MetadataMap = {}));
    var PromptRenderer = class {
      /**
       *
       * @param _endpoint The chat endpoint that the rendered prompt will be sent to.
       * @param _ctor The prompt element constructor to render.
       * @param _props The props to pass to the prompt element.
       */
      constructor(_endpoint, _ctor, _props, _tokenizer) {
        this._endpoint = _endpoint;
        this._ctor = _ctor;
        this._props = _props;
        this._tokenizer = _tokenizer;
        this._meta = /* @__PURE__ */ new Map();
        this._usedContext = [];
        this._ignoredFiles = [];
        this._root = new PromptTreeElement(null, 0);
        this._references = [];
      }
      getAllMeta() {
        const metadataMap = this._meta;
        return {
          get(key) {
            return metadataMap.get(key);
          }
        };
      }
      getIgnoredFiles() {
        return Array.from(new Set(this._ignoredFiles));
      }
      getMeta(key) {
        return this._meta.get(key);
      }
      getUsedContext() {
        return this._usedContext;
      }
      createElement(element) {
        return new element.ctor(element.props);
      }
      async _processPromptPieces(sizing, pieces, progress, token) {
        const promptElements = /* @__PURE__ */ new Map();
        for (const [i, element] of pieces.entries()) {
          if (Array.isArray(element.children)) {
            element.props = element.props ?? {};
            element.props.children = element.children;
          }
          if (!element.ctor) {
            throw new Error(`Invalid ChatMessage child! Child must be a TSX component that extends PromptElement.`);
          }
          const promptElement = this.createElement(element);
          element.node.setObj(promptElement);
          const flexGroupValue = element.props.flexGrow ?? Infinity;
          let flexGroup = promptElements.get(flexGroupValue);
          if (!flexGroup) {
            flexGroup = [];
            promptElements.set(flexGroupValue, flexGroup);
          }
          flexGroup.push({ element, promptElementInstance: promptElement });
        }
        const flexGroups = [...promptElements.entries()].sort(([a], [b]) => b - a).map(([_, group]) => group);
        const setReserved = (groupIndex, reserved) => {
          const sign = reserved ? 1 : -1;
          for (let i = groupIndex + 1; i < flexGroups.length; i++) {
            for (const { element } of flexGroups[i]) {
              if (element.props.flexReserve) {
                sizing.consume(sign * element.props.flexReserve);
              }
            }
          }
        };
        for (const [groupIndex, promptElements2] of flexGroups.entries()) {
          setReserved(groupIndex, true);
          let flexBasisSum = 0;
          for (const { element } of promptElements2) {
            flexBasisSum += (element.props.flex || element.props.flexBasis) ?? 1;
          }
          const elementSizings = promptElements2.map((e) => {
            const proportion = (e.element.props.flexBasis ?? 1) / flexBasisSum;
            return {
              tokenBudget: Math.floor(sizing.remainingTokenBudget * proportion),
              endpoint: sizing.endpoint,
              countTokens: (text, cancellation) => this._tokenizer.tokenLength(text, cancellation)
            };
          });
          setReserved(groupIndex, false);
          await Promise.all(promptElements2.map(async ({ element, promptElementInstance }, i) => {
            const state = await promptElementInstance.prepare?.(elementSizings[i], progress, token);
            element.node.setState(state);
          }));
          const templates = await Promise.all(promptElements2.map(async ({ element, promptElementInstance }, i) => {
            const elementSizing = elementSizings[i];
            return await promptElementInstance.render(element.node.getState(), elementSizing, progress, token);
          }));
          for (const [i, { element, promptElementInstance }] of promptElements2.entries()) {
            const elementSizing = elementSizings[i];
            const template = templates[i];
            if (!template) {
              continue;
            }
            const pieces2 = flattenAndReduce(template);
            const childSizing = new PromptSizingContext(elementSizing.tokenBudget, this._endpoint);
            const { tokensConsumed } = await computeTokensConsumedByLiterals(this._tokenizer, element, promptElementInstance, pieces2);
            childSizing.consume(tokensConsumed);
            await this._handlePromptChildren(element, pieces2, childSizing, progress, token);
            sizing.consume(childSizing.consumed);
          }
        }
      }
      async _prioritize(things, cmp, count) {
        const prioritizedChunks = [];
        const chunkResult = [];
        let i = 0;
        while (i < things.length) {
          if (!things[i].isImplicitLinebreak) {
            const chunk = things[i - 1]?.isImplicitLinebreak ? { index: i, precedingLinebreak: i - 1 } : { index: i };
            prioritizedChunks.push(chunk);
            chunkResult[i] = null;
          }
          i += 1;
        }
        prioritizedChunks.sort((a, b) => cmp(things[a.index], things[b.index]));
        let remainingBudget = this._endpoint.modelMaxPromptTokens;
        const omittedChunks = [];
        while (prioritizedChunks.length > 0) {
          const prioritizedChunk = prioritizedChunks.shift();
          const index = prioritizedChunk.index;
          const chunk = things[index];
          let tokenCount = await count(chunk);
          let precedingLinebreak;
          if (prioritizedChunk.precedingLinebreak) {
            precedingLinebreak = things[prioritizedChunk.precedingLinebreak];
            tokenCount += await count(precedingLinebreak);
          }
          if (tokenCount > remainingBudget) {
            omittedChunks.push(chunk);
            break;
          }
          chunkResult[index] = chunk;
          if (prioritizedChunk.precedingLinebreak && precedingLinebreak) {
            chunkResult[prioritizedChunk.precedingLinebreak] = precedingLinebreak;
          }
          remainingBudget -= tokenCount;
        }
        for (const omittedChunk of prioritizedChunks) {
          const index = omittedChunk.index;
          const chunk = things[index];
          omittedChunks.push(chunk);
        }
        return { result: (0, arrays_1.coalesce)(chunkResult), tokenCount: this._endpoint.modelMaxPromptTokens - remainingBudget, omittedChunks };
      }
      /**
       * Renders the prompt element and its children to a JSON-serializable state.
       * @returns A promise that resolves to an object containing the rendered chat messages and the total token count.
       * The total token count is guaranteed to be less than or equal to the token budget.
       */
      async renderElementJSON(token) {
        await this._processPromptPieces(new PromptSizingContext(this._endpoint.modelMaxPromptTokens, this._endpoint), [{ node: this._root, ctor: this._ctor, props: this._props, children: [] }], void 0, token);
        return {
          node: this._root.toJSON()
        };
      }
      /**
       * Renders the prompt element and its children.
       * @returns A promise that resolves to an object containing the rendered chat messages and the total token count.
       * The total token count is guaranteed to be less than or equal to the token budget.
       */
      async render(progress, token) {
        await this._processPromptPieces(new PromptSizingContext(this._endpoint.modelMaxPromptTokens, this._endpoint), [{ node: this._root, ctor: this._ctor, props: this._props, children: [] }], progress, token);
        const { result: messageChunks, resultChunks } = this._root.materialize();
        const chunkMessages = /* @__PURE__ */ new Set();
        const { result: prioritizedChunks, omittedChunks } = await this._prioritize(resultChunks, (a, b) => MaterializedChatMessageTextChunk.cmp(a, b), async (chunk) => {
          let tokenLength = await this._tokenizer.tokenLength(chunk.text);
          if (!chunkMessages.has(chunk.message)) {
            chunkMessages.add(chunk.message);
            tokenLength = await this._tokenizer.countMessageTokens(chunk.toChatMessage());
          }
          return tokenLength;
        });
        const chatMessagesToChunks = /* @__PURE__ */ new Map();
        for (const chunk of (0, arrays_1.coalesce)(prioritizedChunks)) {
          const value = chatMessagesToChunks.get(chunk.message) ?? [];
          value[chunk.childIndex] = chunk;
          chatMessagesToChunks.set(chunk.message, value);
        }
        const chatMessages = [];
        for (const message of messageChunks) {
          const chunks = chatMessagesToChunks.get(message);
          if (chunks) {
            message.chunks = (0, arrays_1.coalesce)(chunks);
            for (const chunk of chunks) {
              if (chunk && chunk.references.length > 0) {
                message.references.push(...chunk.references);
              }
            }
            chatMessages.push(message);
          }
        }
        const { result: prioritizedMaterializedChatMessages, tokenCount } = await this._prioritize(chatMessages, (a, b) => MaterializedChatMessage.cmp(a, b), async (message) => this._tokenizer.countMessageTokens(message.toChatMessage()));
        const messageResult = prioritizedMaterializedChatMessages.map((message) => message?.toChatMessage());
        const { references, names } = prioritizedMaterializedChatMessages.reduce((acc, message) => {
          [...this._references, ...message.references].forEach((ref) => {
            const isVariableName = "variableName" in ref.anchor;
            if (isVariableName && !acc.names.has(ref.anchor.variableName)) {
              acc.references.push(ref);
              acc.names.add(ref.anchor.variableName);
            } else if (!isVariableName) {
              acc.references.push(ref);
            }
          });
          return acc;
        }, { references: [], names: /* @__PURE__ */ new Set() });
        const { references: omittedReferences } = omittedChunks.reduce((acc, message) => {
          message.references.forEach((ref) => {
            const isVariableName = "variableName" in ref.anchor;
            if (isVariableName && !names.has(ref.anchor.variableName)) {
              acc.references.push(ref);
              names.add(ref.anchor.variableName);
            } else if (!isVariableName) {
              acc.references.push(ref);
            }
          });
          return acc;
        }, { references: [] });
        return { messages: messageResult, hasIgnoredFiles: this._ignoredFiles.length > 0, tokenCount, references: (0, arrays_1.coalesce)(references), omittedReferences: (0, arrays_1.coalesce)(omittedReferences) };
      }
      _handlePromptChildren(element, pieces, sizing, progress, token) {
        if (element.ctor === promptElements_1.TextChunk) {
          this._handleExtrinsicTextChunkChildren(element.node.parent, element.node, element.props, pieces);
          return;
        }
        let todo = [];
        for (const piece of pieces) {
          if (piece.kind === "literal") {
            element.node.appendStringChild(piece.value, element.props.priority ?? Number.MAX_SAFE_INTEGER);
            continue;
          }
          if (piece.kind === "intrinsic") {
            this._handleIntrinsic(element.node, piece.name, { priority: element.props.priority ?? Number.MAX_SAFE_INTEGER, ...piece.props }, flattenAndReduceArr(piece.children));
            continue;
          }
          const childNode = element.node.createChild();
          todo.push({ node: childNode, ctor: piece.ctor, props: { priority: element.props.priority, ...piece.props }, children: piece.children });
        }
        return this._processPromptPieces(sizing, todo, progress, token);
      }
      _handleIntrinsic(node, name, props, children, sortIndex) {
        switch (name) {
          case "meta":
            return this._handleIntrinsicMeta(node, props, children);
          case "br":
            return this._handleIntrinsicLineBreak(node, props, children, props.priority, sortIndex);
          case "usedContext":
            return this._handleIntrinsicUsedContext(node, props, children);
          case "references":
            return this._handleIntrinsicReferences(node, props, children);
          case "ignoredFiles":
            return this._handleIntrinsicIgnoredFiles(node, props, children);
          case "elementJSON":
            return this._handleIntrinsicElementJSON(node, props.data);
        }
        throw new Error(`Unknown intrinsic element ${name}!`);
      }
      _handleIntrinsicMeta(node, props, children) {
        if (children.length > 0) {
          throw new Error(`<meta /> must not have children!`);
        }
        const key = Object.getPrototypeOf(props.value).constructor;
        if (this._meta.has(key)) {
          throw new Error(`Duplicate metadata ${key.name}!`);
        }
        this._meta.set(key, props.value);
      }
      _handleIntrinsicLineBreak(node, props, children, inheritedPriority, sortIndex) {
        if (children.length > 0) {
          throw new Error(`<br /> must not have children!`);
        }
        node.appendLineBreak(true, inheritedPriority ?? Number.MAX_SAFE_INTEGER, sortIndex);
      }
      _handleIntrinsicElementJSON(node, data) {
        node.appendPieceJSON(data.node);
      }
      _handleIntrinsicUsedContext(node, props, children) {
        if (children.length > 0) {
          throw new Error(`<usedContext /> must not have children!`);
        }
        this._usedContext.push(...props.value);
      }
      _handleIntrinsicReferences(node, props, children) {
        if (children.length > 0) {
          throw new Error(`<reference /> must not have children!`);
        }
        node.addReferences(props.value);
        this._references.push(...props.value);
      }
      _handleIntrinsicIgnoredFiles(node, props, children) {
        if (children.length > 0) {
          throw new Error(`<ignoredFiles /> must not have children!`);
        }
        this._ignoredFiles.push(...props.value);
      }
      /**
       * @param node Parent of the <TextChunk />
       * @param textChunkNode The <TextChunk /> node. All children are in-order
       * appended to the parent using the same sort index to ensure order is preserved.
       * @param props Props of the <TextChunk />
       * @param children Rendered children of the <TextChunk />
       */
      _handleExtrinsicTextChunkChildren(node, textChunkNode, props, children) {
        const content = [];
        const references = [];
        for (const child of children) {
          if (child.kind === "extrinsic") {
            throw new Error("TextChunk cannot have extrinsic children!");
          }
          if (child.kind === "literal") {
            content.push(child.value);
          }
          if (child.kind === "intrinsic") {
            if (child.name === "br") {
              content.push("\n");
            } else if (child.name === "references") {
              references.push(...child.props.value);
            } else {
              this._handleIntrinsic(node, child.name, child.props, flattenAndReduceArr(child.children), textChunkNode.childIndex);
            }
          }
        }
        node.appendLineBreak(false, void 0, textChunkNode.childIndex);
        node.appendStringChild(content.join(""), props?.priority ?? Number.MAX_SAFE_INTEGER, references, textChunkNode.childIndex);
      }
    };
    exports2.PromptRenderer = PromptRenderer;
    async function computeTokensConsumedByLiterals(tokenizer, element, instance, pieces) {
      let tokensConsumed = 0;
      if ((0, promptElements_1.isChatMessagePromptElement)(instance)) {
        tokensConsumed += await tokenizer.countMessageTokens({ role: element.props.role, content: "", ...element.props.name ? { name: element.props.name } : void 0 });
        for (const piece of pieces) {
          if (piece.kind === "literal") {
            tokensConsumed += await tokenizer.tokenLength(piece.value);
          }
        }
      }
      return { tokensConsumed };
    }
    function flattenAndReduce(c) {
      if (typeof c === "undefined" || typeof c === "boolean") {
        return [];
      } else if (typeof c === "string" || typeof c === "number") {
        return [new LiteralPromptPiece(String(c))];
      } else if (isFragmentCtor(c)) {
        return [...flattenAndReduceArr(c.children)];
      } else if (typeof c.ctor === "string") {
        return [new IntrinsicPromptPiece(c.ctor, c.props, c.children)];
      } else {
        return [new ExtrinsicPromptPiece(c.ctor, c.props, c.children)];
      }
    }
    function flattenAndReduceArr(arr) {
      return (arr ?? []).reduce((r, c) => {
        r.push(...flattenAndReduce(c));
        return r;
      }, []);
    }
    var IntrinsicPromptPiece = class {
      constructor(name, props, children) {
        this.name = name;
        this.props = props;
        this.children = children;
        this.kind = "intrinsic";
      }
    };
    var ExtrinsicPromptPiece = class {
      constructor(ctor, props, children) {
        this.ctor = ctor;
        this.props = props;
        this.children = children;
        this.kind = "extrinsic";
      }
    };
    var LiteralPromptPiece = class {
      constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.kind = "literal";
      }
    };
    var PromptSizingContext = class {
      constructor(tokenBudget, endpoint) {
        this.tokenBudget = tokenBudget;
        this.endpoint = endpoint;
        this._consumed = 0;
      }
      get consumed() {
        return this._consumed > this.tokenBudget ? this.tokenBudget : this._consumed;
      }
      get remainingTokenBudget() {
        return Math.max(0, this.tokenBudget - this._consumed);
      }
      /** Marks part of the budget as having been consumed by a render() call. */
      consume(budget) {
        this._consumed += budget;
      }
    };
    var PromptTreeElement = class _PromptTreeElement {
      static fromJSON(index, json) {
        const element = new _PromptTreeElement(null, index);
        element._references = json.references?.map((r) => results_1.PromptReference.fromJSON(r)) ?? [];
        element._children = json.children.map((childJson, i) => {
          switch (childJson.type) {
            case 1:
              return _PromptTreeElement.fromJSON(i, childJson);
            case 2:
              return PromptText.fromJSON(element, i, childJson);
            case 3:
              return PromptLineBreak.fromJSON(element, i, childJson);
            default:
              softAssertNever(childJson);
          }
        }).filter(isDefined);
        switch (json.ctor) {
          case 1:
            element._obj = new promptElements_1.BaseChatMessage(json.props);
            break;
          case 2:
            break;
          default:
            softAssertNever(json.ctor);
        }
        return element;
      }
      constructor(parent = null, childIndex) {
        this.parent = parent;
        this.childIndex = childIndex;
        this.kind = 1;
        this._obj = null;
        this._state = void 0;
        this._children = [];
        this._references = [];
      }
      setObj(obj) {
        this._obj = obj;
      }
      setState(state) {
        this._state = state;
      }
      getState() {
        return this._state;
      }
      createChild() {
        const child = new _PromptTreeElement(this, this._children.length);
        this._children.push(child);
        return child;
      }
      appendPieceJSON(data) {
        const child = _PromptTreeElement.fromJSON(this._children.length, data);
        this._children.push(child);
        return child;
      }
      appendStringChild(text, priority, references, sortIndex = this._children.length) {
        this._children.push(new PromptText(this, sortIndex, text, priority, references));
      }
      appendLineBreak(explicit = true, priority, sortIndex = this._children.length) {
        this._children.push(new PromptLineBreak(this, sortIndex, explicit, priority));
      }
      materialize() {
        const result = [];
        const resultChunks = [];
        this._materialize(result, resultChunks);
        return { result, resultChunks };
      }
      toJSON() {
        const json = {
          type: 1,
          ctor: 2,
          children: this._children.slice().sort((a, b) => a.childIndex - b.childIndex).map((c) => c.toJSON()),
          priority: this._obj?.props.priority,
          references: this._references?.map((r) => r.toJSON())
        };
        if (this._obj instanceof promptElements_1.BaseChatMessage) {
          json.ctor = 1;
          json.props = {
            role: this._obj.props.role,
            name: this._obj.props.name,
            priority: this._obj.props.priority,
            toolCalls: this._obj.props.toolCalls,
            toolCallId: this._obj.props.toolCallId
          };
        }
        return json;
      }
      _materialize(result, resultChunks) {
        this._children.sort((a, b) => a.childIndex - b.childIndex);
        if (this._obj instanceof promptElements_1.BaseChatMessage) {
          if (!this._obj.props.role) {
            throw new Error(`Invalid ChatMessage!`);
          }
          const leafNodes = [];
          for (const child of this._children) {
            child.collectLeafs(leafNodes);
          }
          const chunks = [];
          const parent = new MaterializedChatMessage(this._obj.props.role, this._obj.props.name, this._obj instanceof promptElements_1.AssistantMessage ? this._obj.props.toolCalls : void 0, this._obj instanceof promptElements_1.ToolMessage ? this._obj.props.toolCallId : void 0, this._obj.props.priority, this.childIndex, chunks);
          let childIndex = resultChunks.length;
          leafNodes.forEach((node, index) => {
            if (node.kind === 2) {
              chunks.push(new MaterializedChatMessageTextChunk(parent, node.text, node.priority, childIndex++, false, node.references ?? this._references));
            } else {
              if (node.isExplicit) {
                chunks.push(new MaterializedChatMessageTextChunk(parent, "\n", node.priority, childIndex++));
              } else if (chunks.length > 0 && chunks[chunks.length - 1].text !== "\n" || chunks[index - 1] && chunks[index - 1].text !== "\n") {
                chunks.push(new MaterializedChatMessageTextChunk(parent, "\n", node.priority, childIndex++, true));
              }
            }
          });
          resultChunks.push(...chunks);
          result.push(parent);
        } else {
          for (const child of this._children) {
            if (child.kind === 2) {
              throw new Error(`Cannot have a text node outside a ChatMessage. Text: "${child.text}"`);
            } else if (child.kind === 3) {
              throw new Error(`Cannot have a line break node outside a ChatMessage!`);
            }
            child._materialize(result, resultChunks);
          }
        }
      }
      collectLeafs(result) {
        if (this._obj instanceof promptElements_1.BaseChatMessage) {
          throw new Error(`Cannot have a ChatMessage nested inside a ChatMessage!`);
        }
        if (this._obj?.insertLineBreakBefore) {
          result.push(new PromptLineBreak(this, 0, false));
        }
        for (const child of this._children) {
          child.collectLeafs(result);
        }
      }
      addReferences(references) {
        this._references.push(...references);
      }
    };
    var MaterializedChatMessageTextChunk = class {
      constructor(message, text, priority, childIndex, isImplicitLinebreak = false, references = []) {
        this.message = message;
        this.text = text;
        this.priority = priority;
        this.childIndex = childIndex;
        this.isImplicitLinebreak = isImplicitLinebreak;
        this.references = references;
      }
      static cmp(a, b) {
        if (a.priority !== void 0 && b.priority !== void 0 && a.priority === b.priority) {
          if (a.message === b.message) {
            return a.childIndex - b.childIndex;
          }
          return b.childIndex - a.childIndex;
        }
        if (a.priority !== void 0 && b.priority !== void 0 && a.priority !== b.priority) {
          return b.priority - a.priority;
        }
        return a.childIndex - b.childIndex;
      }
      toChatMessage() {
        const chatMessage = this.message.toChatMessage();
        chatMessage.content = this.text;
        return chatMessage;
      }
    };
    var MaterializedChatMessage = class {
      constructor(role, name, toolCalls, toolCallId, priority, childIndex, _chunks, references = []) {
        this.role = role;
        this.name = name;
        this.toolCalls = toolCalls;
        this.toolCallId = toolCallId;
        this.priority = priority;
        this.childIndex = childIndex;
        this._chunks = _chunks;
        this.references = references;
      }
      set chunks(chunks) {
        this._chunks = chunks;
      }
      get text() {
        return this._chunks.reduce((acc, c, i) => {
          if (i !== this._chunks.length - 1 || !c.isImplicitLinebreak) {
            acc += c.text;
          }
          return acc;
        }, "");
      }
      toChatMessage() {
        if (this.role === openai_1.ChatRole.System) {
          return {
            role: this.role,
            content: this.text,
            ...this.name ? { name: this.name } : {}
          };
        } else if (this.role === openai_1.ChatRole.Assistant) {
          return {
            role: this.role,
            content: this.text,
            ...this.toolCalls ? { tool_calls: this.toolCalls } : {},
            ...this.name ? { name: this.name } : {}
          };
        } else if (this.role === openai_1.ChatRole.User) {
          return {
            role: this.role,
            content: this.text,
            ...this.name ? { name: this.name } : {}
          };
        } else if (this.role === openai_1.ChatRole.Tool) {
          return {
            role: this.role,
            content: this.text,
            tool_call_id: this.toolCallId
          };
        } else {
          return {
            role: this.role,
            content: this.text,
            name: this.name
          };
        }
      }
      static cmp(a, b) {
        if (a.priority !== b.priority) {
          return (b.priority || 0) - (a.priority || 0);
        }
        return b.childIndex - a.childIndex;
      }
    };
    var PromptText = class _PromptText {
      static fromJSON(parent, index, json) {
        return new _PromptText(parent, index, json.text, json.priority, json.references?.map((r) => results_1.PromptReference.fromJSON(r)));
      }
      constructor(parent, childIndex, text, priority, references) {
        this.parent = parent;
        this.childIndex = childIndex;
        this.text = text;
        this.priority = priority;
        this.references = references;
        this.kind = 2;
      }
      collectLeafs(result) {
        result.push(this);
      }
      toJSON() {
        return {
          type: 2,
          priority: this.priority,
          text: this.text,
          references: this.references?.map((r) => r.toJSON())
        };
      }
    };
    var PromptLineBreak = class _PromptLineBreak {
      static fromJSON(parent, index, json) {
        return new _PromptLineBreak(parent, index, json.isExplicit, json.priority);
      }
      constructor(parent, childIndex, isExplicit, priority) {
        this.parent = parent;
        this.childIndex = childIndex;
        this.isExplicit = isExplicit;
        this.priority = priority;
        this.kind = 3;
      }
      collectLeafs(result) {
        result.push(this);
      }
      toJSON() {
        return {
          type: 3,
          isExplicit: this.isExplicit,
          priority: this.priority
        };
      }
    };
    function isFragmentCtor(template) {
      return (typeof template.ctor === "function" && template.ctor.isFragment) ?? false;
    }
    function softAssertNever(x) {
    }
    function isDefined(x) {
      return x !== void 0;
    }
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/tokenizer/tokenizer.js
var require_tokenizer = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/tokenizer/tokenizer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AnyTokenizer = void 0;
    var openai_1 = require_openai();
    var AnyTokenizer = class {
      constructor(countTokens) {
        this.countTokens = countTokens;
      }
      async tokenLength(text, token) {
        return this.countTokens(text, token);
      }
      async countMessageTokens(message) {
        return this.countTokens({
          role: this.toChatRole(message.role),
          content: message.content,
          content2: [message.content],
          name: "name" in message ? message.name : void 0
        });
      }
      toChatRole(role) {
        switch (role) {
          case openai_1.ChatRole.User:
            return 1;
          case openai_1.ChatRole.Assistant:
            return 2;
          case openai_1.ChatRole.System:
            return 1;
          case openai_1.ChatRole.Function:
            return 1;
          case openai_1.ChatRole.Tool:
            return 1;
        }
      }
    };
    exports2.AnyTokenizer = AnyTokenizer;
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/tsx-globals.js
var require_tsx_globals = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/tsx-globals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/types.js
var require_types = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@vscode/prompt-tsx/dist/base/index.js
var require_base = __commonJS({
  "node_modules/@vscode/prompt-tsx/dist/base/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toVsCodeChatMessages = exports2.renderElementJSON = exports2.contentType = exports2.renderPrompt = exports2.PromptRenderer = exports2.MetadataMap = exports2.PromptElement = exports2.UserMessage = exports2.TextChunk = exports2.SystemMessage = exports2.PrioritizedList = exports2.FunctionMessage = exports2.AssistantMessage = exports2.ChatRole = exports2.JSONTree = void 0;
    var openai_1 = require_openai();
    var promptRenderer_1 = require_promptRenderer();
    var tokenizer_1 = require_tokenizer();
    exports2.JSONTree = require_jsonTypes();
    var openai_2 = require_openai();
    Object.defineProperty(exports2, "ChatRole", { enumerable: true, get: function() {
      return openai_2.ChatRole;
    } });
    __exportStar(require_results(), exports2);
    __exportStar(require_tsx_globals(), exports2);
    __exportStar(require_types(), exports2);
    var promptElements_1 = require_promptElements();
    Object.defineProperty(exports2, "AssistantMessage", { enumerable: true, get: function() {
      return promptElements_1.AssistantMessage;
    } });
    Object.defineProperty(exports2, "FunctionMessage", { enumerable: true, get: function() {
      return promptElements_1.FunctionMessage;
    } });
    Object.defineProperty(exports2, "PrioritizedList", { enumerable: true, get: function() {
      return promptElements_1.PrioritizedList;
    } });
    Object.defineProperty(exports2, "SystemMessage", { enumerable: true, get: function() {
      return promptElements_1.SystemMessage;
    } });
    Object.defineProperty(exports2, "TextChunk", { enumerable: true, get: function() {
      return promptElements_1.TextChunk;
    } });
    Object.defineProperty(exports2, "UserMessage", { enumerable: true, get: function() {
      return promptElements_1.UserMessage;
    } });
    var promptElement_1 = require_promptElement();
    Object.defineProperty(exports2, "PromptElement", { enumerable: true, get: function() {
      return promptElement_1.PromptElement;
    } });
    var promptRenderer_2 = require_promptRenderer();
    Object.defineProperty(exports2, "MetadataMap", { enumerable: true, get: function() {
      return promptRenderer_2.MetadataMap;
    } });
    Object.defineProperty(exports2, "PromptRenderer", { enumerable: true, get: function() {
      return promptRenderer_2.PromptRenderer;
    } });
    async function renderPrompt2(ctor, props, endpoint, tokenizerMetadata, progress, token, mode = "vscode") {
      let tokenizer = "countTokens" in tokenizerMetadata ? new tokenizer_1.AnyTokenizer((text, token2) => tokenizerMetadata.countTokens(text, token2)) : tokenizerMetadata;
      const renderer = new promptRenderer_1.PromptRenderer(endpoint, ctor, props, tokenizer);
      let { messages, tokenCount, references } = await renderer.render(progress, token);
      const metadatas = renderer.getAllMeta();
      const usedContext = renderer.getUsedContext();
      if (mode === "vscode") {
        messages = toVsCodeChatMessages(messages);
      }
      return { messages, tokenCount, metadatas, usedContext, references };
    }
    exports2.renderPrompt = renderPrompt2;
    exports2.contentType = "application/vnd.codechat.prompt+json.1";
    function renderElementJSON(ctor, props, budgetInformation, token) {
      const renderer = new promptRenderer_1.PromptRenderer(
        { modelMaxPromptTokens: budgetInformation?.tokenBudget ?? Number.MAX_SAFE_INTEGER },
        ctor,
        props,
        // note: if tokenBudget is given, countTokens is also give and vise-versa.
        // `1` is used only as a dummy fallback to avoid errors if no/unlimited budget is provided.
        {
          countMessageTokens(message) {
            throw new Error("Tools may only return text, not messages.");
          },
          tokenLength(text, token2) {
            return Promise.resolve(budgetInformation?.countTokens(text, token2) ?? Promise.resolve(1));
          }
        }
      );
      return renderer.renderElementJSON(token);
    }
    exports2.renderElementJSON = renderElementJSON;
    function toVsCodeChatMessages(messages) {
      const vscode4 = require("vscode");
      return messages.map((m) => {
        switch (m.role) {
          case openai_1.ChatRole.Assistant:
            const message = vscode4.LanguageModelChatMessage.Assistant(m.content, m.name);
            if (m.tool_calls) {
              message.content2 = [m.content];
              message.content2.push(...m.tool_calls.map((tc) => new vscode4.LanguageModelChatResponseToolCallPart(tc.function.name, tc.function.arguments, tc.id)));
            }
            return message;
          case openai_1.ChatRole.User:
            return vscode4.LanguageModelChatMessage.User(m.content, m.name);
          case openai_1.ChatRole.Function: {
            const message2 = vscode4.LanguageModelChatMessage.User("");
            message2.content2 = [new vscode4.LanguageModelChatMessageFunctionResultPart(m.name, m.content)];
            return message2;
          }
          case openai_1.ChatRole.Tool: {
            const message2 = vscode4.LanguageModelChatMessage.User(m.content);
            message2.content2 = [new vscode4.LanguageModelChatMessageFunctionResultPart(m.tool_call_id, m.content)];
            return message2;
          }
          default:
            throw new Error(`Converting chat message with role ${m.role} to VS Code chat message is not supported.`);
        }
      });
    }
    exports2.toVsCodeChatMessages = toVsCodeChatMessages;
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode3 = __toESM(require("vscode"));

// src/fileHandler.ts
var vscode = __toESM(require("vscode"));
async function modifyFile(document, newContent) {
  const edit = new vscode.WorkspaceEdit();
  const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length));
  edit.replace(document.uri, fullRange, newContent);
  await vscode.workspace.applyEdit(edit);
  await document.save();
}
async function listFiles(folderUri) {
  const uris = [];
  const entries = await vscode.workspace.fs.readDirectory(folderUri);
  for (const [name, type] of entries) {
    const entryUri = vscode.Uri.joinPath(folderUri, name);
    if (type === vscode.FileType.File) {
      uris.push(entryUri);
    }
  }
  return uris;
}

// src/extension.ts
var import_prompt_tsx2 = __toESM(require_base());

// src/improveCodePrompt.tsx
var import_prompt_tsx = __toESM(require_base());
var vscode2 = __toESM(require("vscode"));
var ImproveCodePrompt = class extends import_prompt_tsx.PromptElement {
  render(state, sizing) {
    try {
      return /* @__PURE__ */ vscpp(vscppf, null, /* @__PURE__ */ vscpp(import_prompt_tsx.AssistantMessage, { priority: 300 }, 'Analyze the provided code and suggest concrete improvements to enhance readability, maintainability, and performance. List your suggestions, each on a new line prefixed with a hyphen (-). If no improvements are found, return "No improvements found."'), /* @__PURE__ */ vscpp(import_prompt_tsx.UserMessage, { priority: 200 }, "Here is the code to analyze:", /* @__PURE__ */ vscpp("br", null), /* @__PURE__ */ vscpp(import_prompt_tsx.TextChunk, null, this.props.content)));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      vscode2.window.showErrorMessage(`Error rendering ImproveCodePrompt: ${errorMessage}`);
      throw new Error(`Failed to render ImproveCodePrompt: ${errorMessage}`);
    }
  }
};

// src/extension.ts
var logger = vscode3.window.createOutputChannel("Thymeleaf Migration");
function activate(context) {
  context.subscriptions.push(
    vscode3.commands.registerCommand("extension.suggestCodeImprovements", async () => {
      const folderUris = await vscode3.window.showOpenDialog({
        canSelectFolders: true,
        canSelectFiles: false,
        openLabel: "Select folder to improve code"
      });
      if (folderUris && folderUris.length > 0) {
        await suggestImprovementsInFolder(folderUris[0]);
      } else {
        vscode3.window.showErrorMessage("Aucun dossier s\xE9lectionn\xE9");
      }
    })
  );
}
async function suggestImprovementsInFolder(folderUri) {
  const chatModels = await vscode3.lm.selectChatModels({ id: "o3-mini" });
  if (chatModels.length === 0) {
    vscode3.window.showErrorMessage("Aucun mod\xE8le de chat disponible");
    return;
  }
  const chatModel = chatModels[0];
  logger.appendLine(chatModel.maxInputTokens.toString());
  logger.appendLine(`Traitement du dossier : ${folderUri.fsPath}`);
  const fileUris = await listFiles(folderUri);
  logger.appendLine(`${fileUris.length} fichiers trouv\xE9s`);
  for (const fileUri of fileUris) {
    try {
      const document = await vscode3.workspace.openTextDocument(fileUri);
      const text = document.getText();
      logger.appendLine(`Traitement du fichier : ${fileUri.fsPath}`);
      logger.appendLine(`Envoi du prompt pour ${fileUri.fsPath}\u2026`);
      const response = await (0, import_prompt_tsx2.renderPrompt)(
        ImproveCodePrompt,
        { content: text },
        { modelMaxPromptTokens: chatModel.maxInputTokens },
        chatModel
      );
      const improvementComments = response.messages[response.messages.length - 1].content;
      const improvedContent = addImprovementComments(text, improvementComments);
      await modifyFile(document, improvedContent);
      logger.appendLine(`Am\xE9liorations ajout\xE9es \xE0 : ${fileUri.fsPath}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
      logger.appendLine(`Erreur sur ${fileUri.fsPath} : ${errorMessage}`);
    }
  }
}
function addImprovementComments(text, improvementComments) {
  return improvementComments + "\n\n" + text;
}
function deactivate() {
  logger.appendLine("Extension d\xE9sactiv\xE9e");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! Bundled license information:

@vscode/prompt-tsx/dist/base/util/vs/nls.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)

@vscode/prompt-tsx/dist/base/util/vs/common/platform.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)

@vscode/prompt-tsx/dist/base/util/vs/common/process.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)

@vscode/prompt-tsx/dist/base/util/vs/common/path.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)

@vscode/prompt-tsx/dist/base/util/vs/common/uri.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)

@vscode/prompt-tsx/dist/base/util/arrays.js:
  (*!!! DO NOT modify, this file was COPIED from 'microsoft/vscode' *)
*/
//# sourceMappingURL=extension.js.map
