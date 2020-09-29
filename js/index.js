/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sym = (function() {

    /**
     * Namespace sym.
     * @exports sym
     * @namespace
     */
    var sym = {};

    sym.enums = (function() {

        /**
         * Namespace enums.
         * @memberof sym
         * @namespace
         */
        var enums = {};

        /**
         * Service enum.
         * @name sym.enums.Service
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} SLACK=1 SLACK value
         * @property {number} OKTA=2 OKTA value
         * @property {number} AWS=3 AWS value
         * @property {number} CUSTOM=4 CUSTOM value
         */
        enums.Service = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "SLACK"] = 1;
            values[valuesById[2] = "OKTA"] = 2;
            values[valuesById[3] = "AWS"] = 3;
            values[valuesById[4] = "CUSTOM"] = 4;
            return values;
        })();

        return enums;
    })();

    sym.messages = (function() {

        /**
         * Namespace messages.
         * @memberof sym
         * @namespace
         */
        var messages = {};

        messages.Approval = (function() {

            /**
             * Properties of an Approval.
             * @memberof sym.messages
             * @interface IApproval
             * @property {sym.models.IUUID|null} [id] Approval id
             * @property {sym.models.ISchema|null} [schema] Approval schema
             * @property {sym.messages.IRequest|null} [request] Approval request
             * @property {sym.messages.Approval.IMeta|null} [meta] Approval meta
             */

            /**
             * Constructs a new Approval.
             * @memberof sym.messages
             * @classdesc Represents an Approval.
             * @implements IApproval
             * @constructor
             * @param {sym.messages.IApproval=} [properties] Properties to set
             */
            function Approval(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Approval id.
             * @member {sym.models.IUUID|null|undefined} id
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.id = null;

            /**
             * Approval schema.
             * @member {sym.models.ISchema|null|undefined} schema
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.schema = null;

            /**
             * Approval request.
             * @member {sym.messages.IRequest|null|undefined} request
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.request = null;

            /**
             * Approval meta.
             * @member {sym.messages.Approval.IMeta|null|undefined} meta
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.meta = null;

            /**
             * Creates a new Approval instance using the specified properties.
             * @function create
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval=} [properties] Properties to set
             * @returns {sym.messages.Approval} Approval instance
             */
            Approval.create = function create(properties) {
                return new Approval(properties);
            };

            /**
             * Encodes the specified Approval message. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval} message Approval message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Approval.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    $root.sym.models.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                    $root.sym.models.Schema.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                    $root.sym.messages.Request.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                    $root.sym.messages.Approval.Meta.encode(message.meta, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Approval message, length delimited. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval} message Approval message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Approval.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Approval message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Approval
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Approval} Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Approval.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Approval();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.schema = $root.sym.models.Schema.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.request = $root.sym.messages.Request.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.meta = $root.sym.messages.Approval.Meta.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Approval message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Approval
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Approval} Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Approval.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Approval message.
             * @function verify
             * @memberof sym.messages.Approval
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Approval.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    var error = $root.sym.models.UUID.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    var error = $root.sym.models.Schema.verify(message.schema);
                    if (error)
                        return "schema." + error;
                }
                if (message.request != null && message.hasOwnProperty("request")) {
                    var error = $root.sym.messages.Request.verify(message.request);
                    if (error)
                        return "request." + error;
                }
                if (message.meta != null && message.hasOwnProperty("meta")) {
                    var error = $root.sym.messages.Approval.Meta.verify(message.meta);
                    if (error)
                        return "meta." + error;
                }
                return null;
            };

            /**
             * Creates an Approval message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Approval
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Approval} Approval
             */
            Approval.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Approval)
                    return object;
                var message = new $root.sym.messages.Approval();
                if (object.id != null) {
                    if (typeof object.id !== "object")
                        throw TypeError(".sym.messages.Approval.id: object expected");
                    message.id = $root.sym.models.UUID.fromObject(object.id);
                }
                if (object.schema != null) {
                    if (typeof object.schema !== "object")
                        throw TypeError(".sym.messages.Approval.schema: object expected");
                    message.schema = $root.sym.models.Schema.fromObject(object.schema);
                }
                if (object.request != null) {
                    if (typeof object.request !== "object")
                        throw TypeError(".sym.messages.Approval.request: object expected");
                    message.request = $root.sym.messages.Request.fromObject(object.request);
                }
                if (object.meta != null) {
                    if (typeof object.meta !== "object")
                        throw TypeError(".sym.messages.Approval.meta: object expected");
                    message.meta = $root.sym.messages.Approval.Meta.fromObject(object.meta);
                }
                return message;
            };

            /**
             * Creates a plain object from an Approval message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.Approval} message Approval
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Approval.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = null;
                    object.schema = null;
                    object.request = null;
                    object.meta = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = $root.sym.models.UUID.toObject(message.id, options);
                if (message.schema != null && message.hasOwnProperty("schema"))
                    object.schema = $root.sym.models.Schema.toObject(message.schema, options);
                if (message.request != null && message.hasOwnProperty("request"))
                    object.request = $root.sym.messages.Request.toObject(message.request, options);
                if (message.meta != null && message.hasOwnProperty("meta"))
                    object.meta = $root.sym.messages.Approval.Meta.toObject(message.meta, options);
                return object;
            };

            /**
             * Converts this Approval to JSON.
             * @function toJSON
             * @memberof sym.messages.Approval
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Approval.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Approval.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof sym.messages.Approval
                 * @interface IMeta
                 * @property {sym.models.IUser|null} [approver] Meta approver
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof sym.messages.Approval
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {sym.messages.Approval.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta approver.
                 * @member {sym.models.IUser|null|undefined} approver
                 * @memberof sym.messages.Approval.Meta
                 * @instance
                 */
                Meta.prototype.approver = null;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta=} [properties] Properties to set
                 * @returns {sym.messages.Approval.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.approver != null && Object.hasOwnProperty.call(message, "approver"))
                        $root.sym.models.User.encode(message.approver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Approval.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Approval.Meta();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.approver = $root.sym.models.User.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Approval.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Meta message.
                 * @function verify
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Meta.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.approver != null && message.hasOwnProperty("approver")) {
                        var error = $root.sym.models.User.verify(message.approver);
                        if (error)
                            return "approver." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Approval.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Approval.Meta)
                        return object;
                    var message = new $root.sym.messages.Approval.Meta();
                    if (object.approver != null) {
                        if (typeof object.approver !== "object")
                            throw TypeError(".sym.messages.Approval.Meta.approver: object expected");
                        message.approver = $root.sym.models.User.fromObject(object.approver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.approver = null;
                    if (message.approver != null && message.hasOwnProperty("approver"))
                        object.approver = $root.sym.models.User.toObject(message.approver, options);
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Approval.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Meta;
            })();

            return Approval;
        })();

        messages.Dispatch = (function() {

            /**
             * Properties of a Dispatch.
             * @memberof sym.messages
             * @interface IDispatch
             * @property {string|null} [action] Dispatch action
             * @property {google.protobuf.IAny|null} [payload] Dispatch payload
             */

            /**
             * Constructs a new Dispatch.
             * @memberof sym.messages
             * @classdesc Represents a Dispatch.
             * @implements IDispatch
             * @constructor
             * @param {sym.messages.IDispatch=} [properties] Properties to set
             */
            function Dispatch(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Dispatch action.
             * @member {string} action
             * @memberof sym.messages.Dispatch
             * @instance
             */
            Dispatch.prototype.action = "";

            /**
             * Dispatch payload.
             * @member {google.protobuf.IAny|null|undefined} payload
             * @memberof sym.messages.Dispatch
             * @instance
             */
            Dispatch.prototype.payload = null;

            /**
             * Creates a new Dispatch instance using the specified properties.
             * @function create
             * @memberof sym.messages.Dispatch
             * @static
             * @param {sym.messages.IDispatch=} [properties] Properties to set
             * @returns {sym.messages.Dispatch} Dispatch instance
             */
            Dispatch.create = function create(properties) {
                return new Dispatch(properties);
            };

            /**
             * Encodes the specified Dispatch message. Does not implicitly {@link sym.messages.Dispatch.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Dispatch
             * @static
             * @param {sym.messages.IDispatch} message Dispatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dispatch.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Dispatch message, length delimited. Does not implicitly {@link sym.messages.Dispatch.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Dispatch
             * @static
             * @param {sym.messages.IDispatch} message Dispatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dispatch.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Dispatch message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Dispatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Dispatch} Dispatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dispatch.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Dispatch();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.action = reader.string();
                        break;
                    case 2:
                        message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Dispatch message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Dispatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Dispatch} Dispatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dispatch.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Dispatch message.
             * @function verify
             * @memberof sym.messages.Dispatch
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Dispatch.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isString(message.action))
                        return "action: string expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.google.protobuf.Any.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a Dispatch message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Dispatch
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Dispatch} Dispatch
             */
            Dispatch.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Dispatch)
                    return object;
                var message = new $root.sym.messages.Dispatch();
                if (object.action != null)
                    message.action = String(object.action);
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".sym.messages.Dispatch.payload: object expected");
                    message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a Dispatch message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Dispatch
             * @static
             * @param {sym.messages.Dispatch} message Dispatch
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Dispatch.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.action = "";
                    object.payload = null;
                }
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this Dispatch to JSON.
             * @function toJSON
             * @memberof sym.messages.Dispatch
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Dispatch.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Dispatch;
        })();

        messages.Expiration = (function() {

            /**
             * Properties of an Expiration.
             * @memberof sym.messages
             * @interface IExpiration
             * @property {sym.models.IUUID|null} [id] Expiration id
             * @property {sym.models.ISchema|null} [schema] Expiration schema
             * @property {sym.messages.Expiration.ITarget|null} [target] Expiration target
             */

            /**
             * Constructs a new Expiration.
             * @memberof sym.messages
             * @classdesc Represents an Expiration.
             * @implements IExpiration
             * @constructor
             * @param {sym.messages.IExpiration=} [properties] Properties to set
             */
            function Expiration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Expiration id.
             * @member {sym.models.IUUID|null|undefined} id
             * @memberof sym.messages.Expiration
             * @instance
             */
            Expiration.prototype.id = null;

            /**
             * Expiration schema.
             * @member {sym.models.ISchema|null|undefined} schema
             * @memberof sym.messages.Expiration
             * @instance
             */
            Expiration.prototype.schema = null;

            /**
             * Expiration target.
             * @member {sym.messages.Expiration.ITarget|null|undefined} target
             * @memberof sym.messages.Expiration
             * @instance
             */
            Expiration.prototype.target = null;

            /**
             * Creates a new Expiration instance using the specified properties.
             * @function create
             * @memberof sym.messages.Expiration
             * @static
             * @param {sym.messages.IExpiration=} [properties] Properties to set
             * @returns {sym.messages.Expiration} Expiration instance
             */
            Expiration.create = function create(properties) {
                return new Expiration(properties);
            };

            /**
             * Encodes the specified Expiration message. Does not implicitly {@link sym.messages.Expiration.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Expiration
             * @static
             * @param {sym.messages.IExpiration} message Expiration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Expiration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    $root.sym.models.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                    $root.sym.models.Schema.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    $root.sym.messages.Expiration.Target.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Expiration message, length delimited. Does not implicitly {@link sym.messages.Expiration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Expiration
             * @static
             * @param {sym.messages.IExpiration} message Expiration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Expiration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Expiration message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Expiration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Expiration} Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Expiration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Expiration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.schema = $root.sym.models.Schema.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.target = $root.sym.messages.Expiration.Target.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Expiration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Expiration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Expiration} Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Expiration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Expiration message.
             * @function verify
             * @memberof sym.messages.Expiration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Expiration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    var error = $root.sym.models.UUID.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    var error = $root.sym.models.Schema.verify(message.schema);
                    if (error)
                        return "schema." + error;
                }
                if (message.target != null && message.hasOwnProperty("target")) {
                    var error = $root.sym.messages.Expiration.Target.verify(message.target);
                    if (error)
                        return "target." + error;
                }
                return null;
            };

            /**
             * Creates an Expiration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Expiration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Expiration} Expiration
             */
            Expiration.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Expiration)
                    return object;
                var message = new $root.sym.messages.Expiration();
                if (object.id != null) {
                    if (typeof object.id !== "object")
                        throw TypeError(".sym.messages.Expiration.id: object expected");
                    message.id = $root.sym.models.UUID.fromObject(object.id);
                }
                if (object.schema != null) {
                    if (typeof object.schema !== "object")
                        throw TypeError(".sym.messages.Expiration.schema: object expected");
                    message.schema = $root.sym.models.Schema.fromObject(object.schema);
                }
                if (object.target != null) {
                    if (typeof object.target !== "object")
                        throw TypeError(".sym.messages.Expiration.target: object expected");
                    message.target = $root.sym.messages.Expiration.Target.fromObject(object.target);
                }
                return message;
            };

            /**
             * Creates a plain object from an Expiration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Expiration
             * @static
             * @param {sym.messages.Expiration} message Expiration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Expiration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = null;
                    object.schema = null;
                    object.target = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = $root.sym.models.UUID.toObject(message.id, options);
                if (message.schema != null && message.hasOwnProperty("schema"))
                    object.schema = $root.sym.models.Schema.toObject(message.schema, options);
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = $root.sym.messages.Expiration.Target.toObject(message.target, options);
                return object;
            };

            /**
             * Converts this Expiration to JSON.
             * @function toJSON
             * @memberof sym.messages.Expiration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Expiration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Expiration.Target = (function() {

                /**
                 * Properties of a Target.
                 * @memberof sym.messages.Expiration
                 * @interface ITarget
                 * @property {sym.models.IUser|null} [user] Target user
                 * @property {sym.models.IResource|null} [resource] Target resource
                 */

                /**
                 * Constructs a new Target.
                 * @memberof sym.messages.Expiration
                 * @classdesc Represents a Target.
                 * @implements ITarget
                 * @constructor
                 * @param {sym.messages.Expiration.ITarget=} [properties] Properties to set
                 */
                function Target(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Target user.
                 * @member {sym.models.IUser|null|undefined} user
                 * @memberof sym.messages.Expiration.Target
                 * @instance
                 */
                Target.prototype.user = null;

                /**
                 * Target resource.
                 * @member {sym.models.IResource|null|undefined} resource
                 * @memberof sym.messages.Expiration.Target
                 * @instance
                 */
                Target.prototype.resource = null;

                /**
                 * Creates a new Target instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {sym.messages.Expiration.ITarget=} [properties] Properties to set
                 * @returns {sym.messages.Expiration.Target} Target instance
                 */
                Target.create = function create(properties) {
                    return new Target(properties);
                };

                /**
                 * Encodes the specified Target message. Does not implicitly {@link sym.messages.Expiration.Target.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {sym.messages.Expiration.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                        $root.sym.models.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                        $root.sym.models.Resource.encode(message.resource, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Target message, length delimited. Does not implicitly {@link sym.messages.Expiration.Target.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {sym.messages.Expiration.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Target message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Expiration.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Expiration.Target();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user = $root.sym.models.User.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.resource = $root.sym.models.Resource.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Target message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Expiration.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Target message.
                 * @function verify
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Target.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.sym.models.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    if (message.resource != null && message.hasOwnProperty("resource")) {
                        var error = $root.sym.models.Resource.verify(message.resource);
                        if (error)
                            return "resource." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Expiration.Target} Target
                 */
                Target.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Expiration.Target)
                        return object;
                    var message = new $root.sym.messages.Expiration.Target();
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".sym.messages.Expiration.Target.user: object expected");
                        message.user = $root.sym.models.User.fromObject(object.user);
                    }
                    if (object.resource != null) {
                        if (typeof object.resource !== "object")
                            throw TypeError(".sym.messages.Expiration.Target.resource: object expected");
                        message.resource = $root.sym.models.Resource.fromObject(object.resource);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Expiration.Target
                 * @static
                 * @param {sym.messages.Expiration.Target} message Target
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Target.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user = null;
                        object.resource = null;
                    }
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.sym.models.User.toObject(message.user, options);
                    if (message.resource != null && message.hasOwnProperty("resource"))
                        object.resource = $root.sym.models.Resource.toObject(message.resource, options);
                    return object;
                };

                /**
                 * Converts this Target to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Expiration.Target
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Target.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Target;
            })();

            return Expiration;
        })();

        messages.Options = (function() {

            /**
             * Properties of an Options.
             * @memberof sym.messages
             * @interface IOptions
             * @property {sym.models.IUUID|null} [id] Options id
             * @property {sym.models.ISchema|null} [schema] Options schema
             * @property {sym.models.IUser|null} [requester] Options requester
             * @property {sym.messages.Options.IFilter|null} [filter] Options filter
             */

            /**
             * Constructs a new Options.
             * @memberof sym.messages
             * @classdesc Represents an Options.
             * @implements IOptions
             * @constructor
             * @param {sym.messages.IOptions=} [properties] Properties to set
             */
            function Options(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Options id.
             * @member {sym.models.IUUID|null|undefined} id
             * @memberof sym.messages.Options
             * @instance
             */
            Options.prototype.id = null;

            /**
             * Options schema.
             * @member {sym.models.ISchema|null|undefined} schema
             * @memberof sym.messages.Options
             * @instance
             */
            Options.prototype.schema = null;

            /**
             * Options requester.
             * @member {sym.models.IUser|null|undefined} requester
             * @memberof sym.messages.Options
             * @instance
             */
            Options.prototype.requester = null;

            /**
             * Options filter.
             * @member {sym.messages.Options.IFilter|null|undefined} filter
             * @memberof sym.messages.Options
             * @instance
             */
            Options.prototype.filter = null;

            /**
             * Creates a new Options instance using the specified properties.
             * @function create
             * @memberof sym.messages.Options
             * @static
             * @param {sym.messages.IOptions=} [properties] Properties to set
             * @returns {sym.messages.Options} Options instance
             */
            Options.create = function create(properties) {
                return new Options(properties);
            };

            /**
             * Encodes the specified Options message. Does not implicitly {@link sym.messages.Options.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Options
             * @static
             * @param {sym.messages.IOptions} message Options message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Options.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    $root.sym.models.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                    $root.sym.models.Schema.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.requester != null && Object.hasOwnProperty.call(message, "requester"))
                    $root.sym.models.User.encode(message.requester, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                    $root.sym.messages.Options.Filter.encode(message.filter, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link sym.messages.Options.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Options
             * @static
             * @param {sym.messages.IOptions} message Options message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Options.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Options
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Options} Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Options.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Options();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.schema = $root.sym.models.Schema.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.requester = $root.sym.models.User.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.filter = $root.sym.messages.Options.Filter.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Options
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Options} Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Options.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Options message.
             * @function verify
             * @memberof sym.messages.Options
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Options.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    var error = $root.sym.models.UUID.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    var error = $root.sym.models.Schema.verify(message.schema);
                    if (error)
                        return "schema." + error;
                }
                if (message.requester != null && message.hasOwnProperty("requester")) {
                    var error = $root.sym.models.User.verify(message.requester);
                    if (error)
                        return "requester." + error;
                }
                if (message.filter != null && message.hasOwnProperty("filter")) {
                    var error = $root.sym.messages.Options.Filter.verify(message.filter);
                    if (error)
                        return "filter." + error;
                }
                return null;
            };

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Options
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Options} Options
             */
            Options.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Options)
                    return object;
                var message = new $root.sym.messages.Options();
                if (object.id != null) {
                    if (typeof object.id !== "object")
                        throw TypeError(".sym.messages.Options.id: object expected");
                    message.id = $root.sym.models.UUID.fromObject(object.id);
                }
                if (object.schema != null) {
                    if (typeof object.schema !== "object")
                        throw TypeError(".sym.messages.Options.schema: object expected");
                    message.schema = $root.sym.models.Schema.fromObject(object.schema);
                }
                if (object.requester != null) {
                    if (typeof object.requester !== "object")
                        throw TypeError(".sym.messages.Options.requester: object expected");
                    message.requester = $root.sym.models.User.fromObject(object.requester);
                }
                if (object.filter != null) {
                    if (typeof object.filter !== "object")
                        throw TypeError(".sym.messages.Options.filter: object expected");
                    message.filter = $root.sym.messages.Options.Filter.fromObject(object.filter);
                }
                return message;
            };

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Options
             * @static
             * @param {sym.messages.Options} message Options
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Options.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = null;
                    object.schema = null;
                    object.requester = null;
                    object.filter = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = $root.sym.models.UUID.toObject(message.id, options);
                if (message.schema != null && message.hasOwnProperty("schema"))
                    object.schema = $root.sym.models.Schema.toObject(message.schema, options);
                if (message.requester != null && message.hasOwnProperty("requester"))
                    object.requester = $root.sym.models.User.toObject(message.requester, options);
                if (message.filter != null && message.hasOwnProperty("filter"))
                    object.filter = $root.sym.messages.Options.Filter.toObject(message.filter, options);
                return object;
            };

            /**
             * Converts this Options to JSON.
             * @function toJSON
             * @memberof sym.messages.Options
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Options.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Options.Filter = (function() {

                /**
                 * Properties of a Filter.
                 * @memberof sym.messages.Options
                 * @interface IFilter
                 * @property {sym.enums.Service|null} [service] Filter service
                 * @property {string|null} [pattern] Filter pattern
                 */

                /**
                 * Constructs a new Filter.
                 * @memberof sym.messages.Options
                 * @classdesc Represents a Filter.
                 * @implements IFilter
                 * @constructor
                 * @param {sym.messages.Options.IFilter=} [properties] Properties to set
                 */
                function Filter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Filter service.
                 * @member {sym.enums.Service} service
                 * @memberof sym.messages.Options.Filter
                 * @instance
                 */
                Filter.prototype.service = 0;

                /**
                 * Filter pattern.
                 * @member {string} pattern
                 * @memberof sym.messages.Options.Filter
                 * @instance
                 */
                Filter.prototype.pattern = "";

                /**
                 * Creates a new Filter instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {sym.messages.Options.IFilter=} [properties] Properties to set
                 * @returns {sym.messages.Options.Filter} Filter instance
                 */
                Filter.create = function create(properties) {
                    return new Filter(properties);
                };

                /**
                 * Encodes the specified Filter message. Does not implicitly {@link sym.messages.Options.Filter.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {sym.messages.Options.IFilter} message Filter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Filter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
                    if (message.pattern != null && Object.hasOwnProperty.call(message, "pattern"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.pattern);
                    return writer;
                };

                /**
                 * Encodes the specified Filter message, length delimited. Does not implicitly {@link sym.messages.Options.Filter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {sym.messages.Options.IFilter} message Filter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Filter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Filter message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Options.Filter} Filter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Filter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Options.Filter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.service = reader.int32();
                            break;
                        case 2:
                            message.pattern = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Filter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Options.Filter} Filter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Filter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Filter message.
                 * @function verify
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Filter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.service != null && message.hasOwnProperty("service"))
                        switch (message.service) {
                        default:
                            return "service: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.pattern != null && message.hasOwnProperty("pattern"))
                        if (!$util.isString(message.pattern))
                            return "pattern: string expected";
                    return null;
                };

                /**
                 * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Options.Filter} Filter
                 */
                Filter.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Options.Filter)
                        return object;
                    var message = new $root.sym.messages.Options.Filter();
                    switch (object.service) {
                    case "UNKNOWN":
                    case 0:
                        message.service = 0;
                        break;
                    case "SLACK":
                    case 1:
                        message.service = 1;
                        break;
                    case "OKTA":
                    case 2:
                        message.service = 2;
                        break;
                    case "AWS":
                    case 3:
                        message.service = 3;
                        break;
                    case "CUSTOM":
                    case 4:
                        message.service = 4;
                        break;
                    }
                    if (object.pattern != null)
                        message.pattern = String(object.pattern);
                    return message;
                };

                /**
                 * Creates a plain object from a Filter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Options.Filter
                 * @static
                 * @param {sym.messages.Options.Filter} message Filter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Filter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.service = options.enums === String ? "UNKNOWN" : 0;
                        object.pattern = "";
                    }
                    if (message.service != null && message.hasOwnProperty("service"))
                        object.service = options.enums === String ? $root.sym.enums.Service[message.service] : message.service;
                    if (message.pattern != null && message.hasOwnProperty("pattern"))
                        object.pattern = message.pattern;
                    return object;
                };

                /**
                 * Converts this Filter to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Options.Filter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Filter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Filter;
            })();

            return Options;
        })();

        messages.OptionsResponse = (function() {

            /**
             * Properties of an OptionsResponse.
             * @memberof sym.messages
             * @interface IOptionsResponse
             * @property {boolean|null} [ok] OptionsResponse ok
             * @property {string|null} [error] OptionsResponse error
             * @property {Array.<string>|null} [options] OptionsResponse options
             */

            /**
             * Constructs a new OptionsResponse.
             * @memberof sym.messages
             * @classdesc Represents an OptionsResponse.
             * @implements IOptionsResponse
             * @constructor
             * @param {sym.messages.IOptionsResponse=} [properties] Properties to set
             */
            function OptionsResponse(properties) {
                this.options = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OptionsResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.OptionsResponse
             * @instance
             */
            OptionsResponse.prototype.ok = false;

            /**
             * OptionsResponse error.
             * @member {string} error
             * @memberof sym.messages.OptionsResponse
             * @instance
             */
            OptionsResponse.prototype.error = "";

            /**
             * OptionsResponse options.
             * @member {Array.<string>} options
             * @memberof sym.messages.OptionsResponse
             * @instance
             */
            OptionsResponse.prototype.options = $util.emptyArray;

            /**
             * Creates a new OptionsResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {sym.messages.IOptionsResponse=} [properties] Properties to set
             * @returns {sym.messages.OptionsResponse} OptionsResponse instance
             */
            OptionsResponse.create = function create(properties) {
                return new OptionsResponse(properties);
            };

            /**
             * Encodes the specified OptionsResponse message. Does not implicitly {@link sym.messages.OptionsResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {sym.messages.IOptionsResponse} message OptionsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                if (message.options != null && message.options.length)
                    for (var i = 0; i < message.options.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.options[i]);
                return writer;
            };

            /**
             * Encodes the specified OptionsResponse message, length delimited. Does not implicitly {@link sym.messages.OptionsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {sym.messages.IOptionsResponse} message OptionsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OptionsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.OptionsResponse} OptionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.OptionsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    case 3:
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OptionsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.OptionsResponse} OptionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OptionsResponse message.
             * @function verify
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OptionsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (var i = 0; i < message.options.length; ++i)
                        if (!$util.isString(message.options[i]))
                            return "options: string[] expected";
                }
                return null;
            };

            /**
             * Creates an OptionsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.OptionsResponse} OptionsResponse
             */
            OptionsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.OptionsResponse)
                    return object;
                var message = new $root.sym.messages.OptionsResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".sym.messages.OptionsResponse.options: array expected");
                    message.options = [];
                    for (var i = 0; i < object.options.length; ++i)
                        message.options[i] = String(object.options[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an OptionsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.OptionsResponse
             * @static
             * @param {sym.messages.OptionsResponse} message OptionsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.options = [];
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                if (message.options && message.options.length) {
                    object.options = [];
                    for (var j = 0; j < message.options.length; ++j)
                        object.options[j] = message.options[j];
                }
                return object;
            };

            /**
             * Converts this OptionsResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.OptionsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OptionsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OptionsResponse;
        })();

        messages.Request = (function() {

            /**
             * Properties of a Request.
             * @memberof sym.messages
             * @interface IRequest
             * @property {sym.models.IUUID|null} [id] Request id
             * @property {sym.models.ISchema|null} [schema] Request schema
             * @property {sym.messages.Request.ITarget|null} [target] Request target
             * @property {sym.messages.Request.IMeta|null} [meta] Request meta
             */

            /**
             * Constructs a new Request.
             * @memberof sym.messages
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {sym.messages.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request id.
             * @member {sym.models.IUUID|null|undefined} id
             * @memberof sym.messages.Request
             * @instance
             */
            Request.prototype.id = null;

            /**
             * Request schema.
             * @member {sym.models.ISchema|null|undefined} schema
             * @memberof sym.messages.Request
             * @instance
             */
            Request.prototype.schema = null;

            /**
             * Request target.
             * @member {sym.messages.Request.ITarget|null|undefined} target
             * @memberof sym.messages.Request
             * @instance
             */
            Request.prototype.target = null;

            /**
             * Request meta.
             * @member {sym.messages.Request.IMeta|null|undefined} meta
             * @memberof sym.messages.Request
             * @instance
             */
            Request.prototype.meta = null;

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof sym.messages.Request
             * @static
             * @param {sym.messages.IRequest=} [properties] Properties to set
             * @returns {sym.messages.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link sym.messages.Request.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Request
             * @static
             * @param {sym.messages.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    $root.sym.models.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                    $root.sym.models.Schema.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    $root.sym.messages.Request.Target.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                    $root.sym.messages.Request.Meta.encode(message.meta, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link sym.messages.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Request
             * @static
             * @param {sym.messages.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.schema = $root.sym.models.Schema.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.target = $root.sym.messages.Request.Target.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.meta = $root.sym.messages.Request.Meta.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof sym.messages.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    var error = $root.sym.models.UUID.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    var error = $root.sym.models.Schema.verify(message.schema);
                    if (error)
                        return "schema." + error;
                }
                if (message.target != null && message.hasOwnProperty("target")) {
                    var error = $root.sym.messages.Request.Target.verify(message.target);
                    if (error)
                        return "target." + error;
                }
                if (message.meta != null && message.hasOwnProperty("meta")) {
                    var error = $root.sym.messages.Request.Meta.verify(message.meta);
                    if (error)
                        return "meta." + error;
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Request)
                    return object;
                var message = new $root.sym.messages.Request();
                if (object.id != null) {
                    if (typeof object.id !== "object")
                        throw TypeError(".sym.messages.Request.id: object expected");
                    message.id = $root.sym.models.UUID.fromObject(object.id);
                }
                if (object.schema != null) {
                    if (typeof object.schema !== "object")
                        throw TypeError(".sym.messages.Request.schema: object expected");
                    message.schema = $root.sym.models.Schema.fromObject(object.schema);
                }
                if (object.target != null) {
                    if (typeof object.target !== "object")
                        throw TypeError(".sym.messages.Request.target: object expected");
                    message.target = $root.sym.messages.Request.Target.fromObject(object.target);
                }
                if (object.meta != null) {
                    if (typeof object.meta !== "object")
                        throw TypeError(".sym.messages.Request.meta: object expected");
                    message.meta = $root.sym.messages.Request.Meta.fromObject(object.meta);
                }
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Request
             * @static
             * @param {sym.messages.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = null;
                    object.schema = null;
                    object.target = null;
                    object.meta = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = $root.sym.models.UUID.toObject(message.id, options);
                if (message.schema != null && message.hasOwnProperty("schema"))
                    object.schema = $root.sym.models.Schema.toObject(message.schema, options);
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = $root.sym.messages.Request.Target.toObject(message.target, options);
                if (message.meta != null && message.hasOwnProperty("meta"))
                    object.meta = $root.sym.messages.Request.Meta.toObject(message.meta, options);
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof sym.messages.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Request.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof sym.messages.Request
                 * @interface IMeta
                 * @property {string|null} [reason] Meta reason
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof sym.messages.Request
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {sym.messages.Request.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta reason.
                 * @member {string} reason
                 * @memberof sym.messages.Request.Meta
                 * @instance
                 */
                Meta.prototype.reason = "";

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {sym.messages.Request.IMeta=} [properties] Properties to set
                 * @returns {sym.messages.Request.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link sym.messages.Request.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {sym.messages.Request.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                    return writer;
                };

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link sym.messages.Request.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {sym.messages.Request.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Request.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Request.Meta();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Request.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Meta message.
                 * @function verify
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Meta.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        if (!$util.isString(message.reason))
                            return "reason: string expected";
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Request.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Request.Meta)
                        return object;
                    var message = new $root.sym.messages.Request.Meta();
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Request.Meta
                 * @static
                 * @param {sym.messages.Request.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.reason = "";
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Request.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Meta;
            })();

            Request.Target = (function() {

                /**
                 * Properties of a Target.
                 * @memberof sym.messages.Request
                 * @interface ITarget
                 * @property {sym.models.IUser|null} [user] Target user
                 * @property {sym.models.IResource|null} [resource] Target resource
                 */

                /**
                 * Constructs a new Target.
                 * @memberof sym.messages.Request
                 * @classdesc Represents a Target.
                 * @implements ITarget
                 * @constructor
                 * @param {sym.messages.Request.ITarget=} [properties] Properties to set
                 */
                function Target(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Target user.
                 * @member {sym.models.IUser|null|undefined} user
                 * @memberof sym.messages.Request.Target
                 * @instance
                 */
                Target.prototype.user = null;

                /**
                 * Target resource.
                 * @member {sym.models.IResource|null|undefined} resource
                 * @memberof sym.messages.Request.Target
                 * @instance
                 */
                Target.prototype.resource = null;

                /**
                 * Creates a new Target instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {sym.messages.Request.ITarget=} [properties] Properties to set
                 * @returns {sym.messages.Request.Target} Target instance
                 */
                Target.create = function create(properties) {
                    return new Target(properties);
                };

                /**
                 * Encodes the specified Target message. Does not implicitly {@link sym.messages.Request.Target.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {sym.messages.Request.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                        $root.sym.models.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                        $root.sym.models.Resource.encode(message.resource, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Target message, length delimited. Does not implicitly {@link sym.messages.Request.Target.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {sym.messages.Request.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Target message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Request.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Request.Target();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user = $root.sym.models.User.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.resource = $root.sym.models.Resource.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Target message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Request.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Target message.
                 * @function verify
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Target.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.sym.models.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    if (message.resource != null && message.hasOwnProperty("resource")) {
                        var error = $root.sym.models.Resource.verify(message.resource);
                        if (error)
                            return "resource." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Request.Target} Target
                 */
                Target.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Request.Target)
                        return object;
                    var message = new $root.sym.messages.Request.Target();
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".sym.messages.Request.Target.user: object expected");
                        message.user = $root.sym.models.User.fromObject(object.user);
                    }
                    if (object.resource != null) {
                        if (typeof object.resource !== "object")
                            throw TypeError(".sym.messages.Request.Target.resource: object expected");
                        message.resource = $root.sym.models.Resource.fromObject(object.resource);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Request.Target
                 * @static
                 * @param {sym.messages.Request.Target} message Target
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Target.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user = null;
                        object.resource = null;
                    }
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.sym.models.User.toObject(message.user, options);
                    if (message.resource != null && message.hasOwnProperty("resource"))
                        object.resource = $root.sym.models.Resource.toObject(message.resource, options);
                    return object;
                };

                /**
                 * Converts this Target to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Request.Target
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Target.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Target;
            })();

            return Request;
        })();

        messages.ApprovalResponse = (function() {

            /**
             * Properties of an ApprovalResponse.
             * @memberof sym.messages
             * @interface IApprovalResponse
             * @property {boolean|null} [ok] ApprovalResponse ok
             * @property {string|null} [error] ApprovalResponse error
             */

            /**
             * Constructs a new ApprovalResponse.
             * @memberof sym.messages
             * @classdesc Represents an ApprovalResponse.
             * @implements IApprovalResponse
             * @constructor
             * @param {sym.messages.IApprovalResponse=} [properties] Properties to set
             */
            function ApprovalResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApprovalResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.ApprovalResponse
             * @instance
             */
            ApprovalResponse.prototype.ok = false;

            /**
             * ApprovalResponse error.
             * @member {string} error
             * @memberof sym.messages.ApprovalResponse
             * @instance
             */
            ApprovalResponse.prototype.error = "";

            /**
             * Creates a new ApprovalResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {sym.messages.IApprovalResponse=} [properties] Properties to set
             * @returns {sym.messages.ApprovalResponse} ApprovalResponse instance
             */
            ApprovalResponse.create = function create(properties) {
                return new ApprovalResponse(properties);
            };

            /**
             * Encodes the specified ApprovalResponse message. Does not implicitly {@link sym.messages.ApprovalResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {sym.messages.IApprovalResponse} message ApprovalResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApprovalResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ApprovalResponse message, length delimited. Does not implicitly {@link sym.messages.ApprovalResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {sym.messages.IApprovalResponse} message ApprovalResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApprovalResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApprovalResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.ApprovalResponse} ApprovalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApprovalResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.ApprovalResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApprovalResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.ApprovalResponse} ApprovalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApprovalResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApprovalResponse message.
             * @function verify
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApprovalResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates an ApprovalResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.ApprovalResponse} ApprovalResponse
             */
            ApprovalResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.ApprovalResponse)
                    return object;
                var message = new $root.sym.messages.ApprovalResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from an ApprovalResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.ApprovalResponse
             * @static
             * @param {sym.messages.ApprovalResponse} message ApprovalResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApprovalResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this ApprovalResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.ApprovalResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApprovalResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ApprovalResponse;
        })();

        messages.ExpirationResponse = (function() {

            /**
             * Properties of an ExpirationResponse.
             * @memberof sym.messages
             * @interface IExpirationResponse
             * @property {boolean|null} [ok] ExpirationResponse ok
             * @property {string|null} [error] ExpirationResponse error
             */

            /**
             * Constructs a new ExpirationResponse.
             * @memberof sym.messages
             * @classdesc Represents an ExpirationResponse.
             * @implements IExpirationResponse
             * @constructor
             * @param {sym.messages.IExpirationResponse=} [properties] Properties to set
             */
            function ExpirationResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExpirationResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.ExpirationResponse
             * @instance
             */
            ExpirationResponse.prototype.ok = false;

            /**
             * ExpirationResponse error.
             * @member {string} error
             * @memberof sym.messages.ExpirationResponse
             * @instance
             */
            ExpirationResponse.prototype.error = "";

            /**
             * Creates a new ExpirationResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse=} [properties] Properties to set
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse instance
             */
            ExpirationResponse.create = function create(properties) {
                return new ExpirationResponse(properties);
            };

            /**
             * Encodes the specified ExpirationResponse message. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse} message ExpirationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExpirationResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ExpirationResponse message, length delimited. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse} message ExpirationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExpirationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExpirationResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.ExpirationResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExpirationResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExpirationResponse message.
             * @function verify
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExpirationResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates an ExpirationResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             */
            ExpirationResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.ExpirationResponse)
                    return object;
                var message = new $root.sym.messages.ExpirationResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from an ExpirationResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.ExpirationResponse} message ExpirationResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExpirationResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this ExpirationResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.ExpirationResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExpirationResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ExpirationResponse;
        })();

        messages.DispatchResponse = (function() {

            /**
             * Properties of a DispatchResponse.
             * @memberof sym.messages
             * @interface IDispatchResponse
             * @property {boolean|null} [ok] DispatchResponse ok
             * @property {string|null} [error] DispatchResponse error
             */

            /**
             * Constructs a new DispatchResponse.
             * @memberof sym.messages
             * @classdesc Represents a DispatchResponse.
             * @implements IDispatchResponse
             * @constructor
             * @param {sym.messages.IDispatchResponse=} [properties] Properties to set
             */
            function DispatchResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DispatchResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.DispatchResponse
             * @instance
             */
            DispatchResponse.prototype.ok = false;

            /**
             * DispatchResponse error.
             * @member {string} error
             * @memberof sym.messages.DispatchResponse
             * @instance
             */
            DispatchResponse.prototype.error = "";

            /**
             * Creates a new DispatchResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {sym.messages.IDispatchResponse=} [properties] Properties to set
             * @returns {sym.messages.DispatchResponse} DispatchResponse instance
             */
            DispatchResponse.create = function create(properties) {
                return new DispatchResponse(properties);
            };

            /**
             * Encodes the specified DispatchResponse message. Does not implicitly {@link sym.messages.DispatchResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {sym.messages.IDispatchResponse} message DispatchResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DispatchResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified DispatchResponse message, length delimited. Does not implicitly {@link sym.messages.DispatchResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {sym.messages.IDispatchResponse} message DispatchResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DispatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DispatchResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.DispatchResponse} DispatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DispatchResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.DispatchResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DispatchResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.DispatchResponse} DispatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DispatchResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DispatchResponse message.
             * @function verify
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DispatchResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a DispatchResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.DispatchResponse} DispatchResponse
             */
            DispatchResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.DispatchResponse)
                    return object;
                var message = new $root.sym.messages.DispatchResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a DispatchResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.DispatchResponse
             * @static
             * @param {sym.messages.DispatchResponse} message DispatchResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DispatchResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this DispatchResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.DispatchResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DispatchResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DispatchResponse;
        })();

        return messages;
    })();

    sym.models = (function() {

        /**
         * Namespace models.
         * @memberof sym
         * @namespace
         */
        var models = {};

        models.Resource = (function() {

            /**
             * Properties of a Resource.
             * @memberof sym.models
             * @interface IResource
             * @property {sym.enums.Service|null} [service] Resource service
             * @property {string|null} [id] Resource id
             */

            /**
             * Constructs a new Resource.
             * @memberof sym.models
             * @classdesc Represents a Resource.
             * @implements IResource
             * @constructor
             * @param {sym.models.IResource=} [properties] Properties to set
             */
            function Resource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Resource service.
             * @member {sym.enums.Service} service
             * @memberof sym.models.Resource
             * @instance
             */
            Resource.prototype.service = 0;

            /**
             * Resource id.
             * @member {string} id
             * @memberof sym.models.Resource
             * @instance
             */
            Resource.prototype.id = "";

            /**
             * Creates a new Resource instance using the specified properties.
             * @function create
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource=} [properties] Properties to set
             * @returns {sym.models.Resource} Resource instance
             */
            Resource.create = function create(properties) {
                return new Resource(properties);
            };

            /**
             * Encodes the specified Resource message. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @function encode
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource} message Resource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resource.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Resource message, length delimited. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource} message Resource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Resource message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.Resource} Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resource.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.Resource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.service = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Resource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.Resource} Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Resource message.
             * @function verify
             * @memberof sym.models.Resource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Resource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.service != null && message.hasOwnProperty("service"))
                    switch (message.service) {
                    default:
                        return "service: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Resource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.Resource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.Resource} Resource
             */
            Resource.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.Resource)
                    return object;
                var message = new $root.sym.models.Resource();
                switch (object.service) {
                case "UNKNOWN":
                case 0:
                    message.service = 0;
                    break;
                case "SLACK":
                case 1:
                    message.service = 1;
                    break;
                case "OKTA":
                case 2:
                    message.service = 2;
                    break;
                case "AWS":
                case 3:
                    message.service = 3;
                    break;
                case "CUSTOM":
                case 4:
                    message.service = 4;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Resource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.Resource} message Resource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Resource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.service = options.enums === String ? "UNKNOWN" : 0;
                    object.id = "";
                }
                if (message.service != null && message.hasOwnProperty("service"))
                    object.service = options.enums === String ? $root.sym.enums.Service[message.service] : message.service;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Resource to JSON.
             * @function toJSON
             * @memberof sym.models.Resource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Resource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Resource;
        })();

        models.Schema = (function() {

            /**
             * Properties of a Schema.
             * @memberof sym.models
             * @interface ISchema
             * @property {number|null} [version] Schema version
             */

            /**
             * Constructs a new Schema.
             * @memberof sym.models
             * @classdesc Represents a Schema.
             * @implements ISchema
             * @constructor
             * @param {sym.models.ISchema=} [properties] Properties to set
             */
            function Schema(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Schema version.
             * @member {number} version
             * @memberof sym.models.Schema
             * @instance
             */
            Schema.prototype.version = 0;

            /**
             * Creates a new Schema instance using the specified properties.
             * @function create
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema=} [properties] Properties to set
             * @returns {sym.models.Schema} Schema instance
             */
            Schema.create = function create(properties) {
                return new Schema(properties);
            };

            /**
             * Encodes the specified Schema message. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @function encode
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema} message Schema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schema.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                return writer;
            };

            /**
             * Encodes the specified Schema message, length delimited. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema} message Schema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schema.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.Schema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.Schema} Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schema.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.Schema();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Schema message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.Schema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.Schema} Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schema.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Schema message.
             * @function verify
             * @memberof sym.models.Schema
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Schema.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                return null;
            };

            /**
             * Creates a Schema message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.Schema
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.Schema} Schema
             */
            Schema.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.Schema)
                    return object;
                var message = new $root.sym.models.Schema();
                if (object.version != null)
                    message.version = object.version | 0;
                return message;
            };

            /**
             * Creates a plain object from a Schema message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.Schema} message Schema
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Schema.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.version = 0;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                return object;
            };

            /**
             * Converts this Schema to JSON.
             * @function toJSON
             * @memberof sym.models.Schema
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Schema.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Schema;
        })();

        models.User = (function() {

            /**
             * Properties of a User.
             * @memberof sym.models
             * @interface IUser
             * @property {sym.models.IUUID|null} [uuid] User uuid
             * @property {sym.models.User.IIdentity|null} [currentIdentity] User currentIdentity
             * @property {Array.<sym.models.User.IIdentity>|null} [identities] User identities
             */

            /**
             * Constructs a new User.
             * @memberof sym.models
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {sym.models.IUser=} [properties] Properties to set
             */
            function User(properties) {
                this.identities = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * User uuid.
             * @member {sym.models.IUUID|null|undefined} uuid
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.uuid = null;

            /**
             * User currentIdentity.
             * @member {sym.models.User.IIdentity|null|undefined} currentIdentity
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.currentIdentity = null;

            /**
             * User identities.
             * @member {Array.<sym.models.User.IIdentity>} identities
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.identities = $util.emptyArray;

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser=} [properties] Properties to set
             * @returns {sym.models.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };

            /**
             * Encodes the specified User message. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @function encode
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    $root.sym.models.UUID.encode(message.uuid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.currentIdentity != null && Object.hasOwnProperty.call(message, "currentIdentity"))
                    $root.sym.models.User.Identity.encode(message.currentIdentity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identities != null && message.identities.length)
                    for (var i = 0; i < message.identities.length; ++i)
                        $root.sym.models.User.Identity.encode(message.identities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.currentIdentity = $root.sym.models.User.Identity.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.identities && message.identities.length))
                            message.identities = [];
                        message.identities.push($root.sym.models.User.Identity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a User message.
             * @function verify
             * @memberof sym.models.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid")) {
                    var error = $root.sym.models.UUID.verify(message.uuid);
                    if (error)
                        return "uuid." + error;
                }
                if (message.currentIdentity != null && message.hasOwnProperty("currentIdentity")) {
                    var error = $root.sym.models.User.Identity.verify(message.currentIdentity);
                    if (error)
                        return "currentIdentity." + error;
                }
                if (message.identities != null && message.hasOwnProperty("identities")) {
                    if (!Array.isArray(message.identities))
                        return "identities: array expected";
                    for (var i = 0; i < message.identities.length; ++i) {
                        var error = $root.sym.models.User.Identity.verify(message.identities[i]);
                        if (error)
                            return "identities." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.User)
                    return object;
                var message = new $root.sym.models.User();
                if (object.uuid != null) {
                    if (typeof object.uuid !== "object")
                        throw TypeError(".sym.models.User.uuid: object expected");
                    message.uuid = $root.sym.models.UUID.fromObject(object.uuid);
                }
                if (object.currentIdentity != null) {
                    if (typeof object.currentIdentity !== "object")
                        throw TypeError(".sym.models.User.currentIdentity: object expected");
                    message.currentIdentity = $root.sym.models.User.Identity.fromObject(object.currentIdentity);
                }
                if (object.identities) {
                    if (!Array.isArray(object.identities))
                        throw TypeError(".sym.models.User.identities: array expected");
                    message.identities = [];
                    for (var i = 0; i < object.identities.length; ++i) {
                        if (typeof object.identities[i] !== "object")
                            throw TypeError(".sym.models.User.identities: object expected");
                        message.identities[i] = $root.sym.models.User.Identity.fromObject(object.identities[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.User
             * @static
             * @param {sym.models.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.identities = [];
                if (options.defaults) {
                    object.uuid = null;
                    object.currentIdentity = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = $root.sym.models.UUID.toObject(message.uuid, options);
                if (message.currentIdentity != null && message.hasOwnProperty("currentIdentity"))
                    object.currentIdentity = $root.sym.models.User.Identity.toObject(message.currentIdentity, options);
                if (message.identities && message.identities.length) {
                    object.identities = [];
                    for (var j = 0; j < message.identities.length; ++j)
                        object.identities[j] = $root.sym.models.User.Identity.toObject(message.identities[j], options);
                }
                return object;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof sym.models.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            User.Identity = (function() {

                /**
                 * Properties of an Identity.
                 * @memberof sym.models.User
                 * @interface IIdentity
                 * @property {sym.enums.Service|null} [service] Identity service
                 * @property {string|null} [id] Identity id
                 */

                /**
                 * Constructs a new Identity.
                 * @memberof sym.models.User
                 * @classdesc Represents an Identity.
                 * @implements IIdentity
                 * @constructor
                 * @param {sym.models.User.IIdentity=} [properties] Properties to set
                 */
                function Identity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Identity service.
                 * @member {sym.enums.Service} service
                 * @memberof sym.models.User.Identity
                 * @instance
                 */
                Identity.prototype.service = 0;

                /**
                 * Identity id.
                 * @member {string} id
                 * @memberof sym.models.User.Identity
                 * @instance
                 */
                Identity.prototype.id = "";

                /**
                 * Creates a new Identity instance using the specified properties.
                 * @function create
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity=} [properties] Properties to set
                 * @returns {sym.models.User.Identity} Identity instance
                 */
                Identity.create = function create(properties) {
                    return new Identity(properties);
                };

                /**
                 * Encodes the specified Identity message. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @function encode
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity} message Identity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Identity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Identity message, length delimited. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity} message Identity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Identity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Identity message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.models.User.Identity} Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Identity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.User.Identity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.service = reader.int32();
                            break;
                        case 2:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Identity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.models.User.Identity} Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Identity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Identity message.
                 * @function verify
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Identity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.service != null && message.hasOwnProperty("service"))
                        switch (message.service) {
                        default:
                            return "service: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates an Identity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.models.User.Identity} Identity
                 */
                Identity.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.models.User.Identity)
                        return object;
                    var message = new $root.sym.models.User.Identity();
                    switch (object.service) {
                    case "UNKNOWN":
                    case 0:
                        message.service = 0;
                        break;
                    case "SLACK":
                    case 1:
                        message.service = 1;
                        break;
                    case "OKTA":
                    case 2:
                        message.service = 2;
                        break;
                    case "AWS":
                    case 3:
                        message.service = 3;
                        break;
                    case "CUSTOM":
                    case 4:
                        message.service = 4;
                        break;
                    }
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from an Identity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.Identity} message Identity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Identity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.service = options.enums === String ? "UNKNOWN" : 0;
                        object.id = "";
                    }
                    if (message.service != null && message.hasOwnProperty("service"))
                        object.service = options.enums === String ? $root.sym.enums.Service[message.service] : message.service;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Identity to JSON.
                 * @function toJSON
                 * @memberof sym.models.User.Identity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Identity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Identity;
            })();

            return User;
        })();

        models.UUID = (function() {

            /**
             * Properties of a UUID.
             * @memberof sym.models
             * @interface IUUID
             * @property {string|null} [value] UUID value
             */

            /**
             * Constructs a new UUID.
             * @memberof sym.models
             * @classdesc Represents a UUID.
             * @implements IUUID
             * @constructor
             * @param {sym.models.IUUID=} [properties] Properties to set
             */
            function UUID(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UUID value.
             * @member {string} value
             * @memberof sym.models.UUID
             * @instance
             */
            UUID.prototype.value = "";

            /**
             * Creates a new UUID instance using the specified properties.
             * @function create
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID=} [properties] Properties to set
             * @returns {sym.models.UUID} UUID instance
             */
            UUID.create = function create(properties) {
                return new UUID(properties);
            };

            /**
             * Encodes the specified UUID message. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @function encode
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID} message UUID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UUID.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified UUID message, length delimited. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID} message UUID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UUID.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UUID message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.UUID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.UUID} UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UUID.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.UUID();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UUID message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.UUID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.UUID} UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UUID.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UUID message.
             * @function verify
             * @memberof sym.models.UUID
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UUID.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a UUID message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.UUID
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.UUID} UUID
             */
            UUID.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.UUID)
                    return object;
                var message = new $root.sym.models.UUID();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a UUID message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.UUID} message UUID
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UUID.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UUID to JSON.
             * @function toJSON
             * @memberof sym.models.UUID
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UUID.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UUID;
        })();

        return models;
    })();

    return sym;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
