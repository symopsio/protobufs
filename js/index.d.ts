import * as $protobuf from "protobufjs";
/** Namespace sym. */
export namespace sym {

    /** Namespace enums. */
    namespace enums {

        /** Service enum. */
        enum Service {
            UNKNOWN = 0,
            SLACK = 1,
            OKTA = 2,
            AWS = 3,
            CUSTOM = 4
        }
    }

    /** Namespace messages. */
    namespace messages {

        /** Properties of an Approval. */
        interface IApproval {

            /** Approval id */
            id?: (sym.models.IUUID|null);

            /** Approval schema */
            schema?: (sym.models.ISchema|null);

            /** Approval target */
            target?: (sym.messages.Approval.ITarget|null);

            /** Approval meta */
            meta?: (sym.messages.Approval.IMeta|null);
        }

        /** Represents an Approval. */
        class Approval implements IApproval {

            /**
             * Constructs a new Approval.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.messages.IApproval);

            /** Approval id. */
            public id?: (sym.models.IUUID|null);

            /** Approval schema. */
            public schema?: (sym.models.ISchema|null);

            /** Approval target. */
            public target?: (sym.messages.Approval.ITarget|null);

            /** Approval meta. */
            public meta?: (sym.messages.Approval.IMeta|null);

            /**
             * Creates a new Approval instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Approval instance
             */
            public static create(properties?: sym.messages.IApproval): sym.messages.Approval;

            /**
             * Encodes the specified Approval message. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @param message Approval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.messages.IApproval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Approval message, length delimited. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @param message Approval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.messages.IApproval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Approval message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.Approval;

            /**
             * Decodes an Approval message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.Approval;

            /**
             * Verifies an Approval message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Approval message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Approval
             */
            public static fromObject(object: { [k: string]: any }): sym.messages.Approval;

            /**
             * Creates a plain object from an Approval message. Also converts values to other types if specified.
             * @param message Approval
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.messages.Approval, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Approval to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Approval {

            /** Properties of a Meta. */
            interface IMeta {

                /** Meta approver */
                approver?: (sym.models.IUser|null);

                /** Meta reason */
                reason?: (string|null);
            }

            /** Represents a Meta. */
            class Meta implements IMeta {

                /**
                 * Constructs a new Meta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sym.messages.Approval.IMeta);

                /** Meta approver. */
                public approver?: (sym.models.IUser|null);

                /** Meta reason. */
                public reason: string;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Meta instance
                 */
                public static create(properties?: sym.messages.Approval.IMeta): sym.messages.Approval.Meta;

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sym.messages.Approval.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sym.messages.Approval.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.Approval.Meta;

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.Approval.Meta;

                /**
                 * Verifies a Meta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Meta
                 */
                public static fromObject(object: { [k: string]: any }): sym.messages.Approval.Meta;

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @param message Meta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sym.messages.Approval.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Meta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Target. */
            interface ITarget {

                /** Target user */
                user?: (sym.models.IUser|null);

                /** Target resource */
                resource?: (sym.models.IResource|null);
            }

            /** Represents a Target. */
            class Target implements ITarget {

                /**
                 * Constructs a new Target.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sym.messages.Approval.ITarget);

                /** Target user. */
                public user?: (sym.models.IUser|null);

                /** Target resource. */
                public resource?: (sym.models.IResource|null);

                /**
                 * Creates a new Target instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Target instance
                 */
                public static create(properties?: sym.messages.Approval.ITarget): sym.messages.Approval.Target;

                /**
                 * Encodes the specified Target message. Does not implicitly {@link sym.messages.Approval.Target.verify|verify} messages.
                 * @param message Target message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sym.messages.Approval.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Target message, length delimited. Does not implicitly {@link sym.messages.Approval.Target.verify|verify} messages.
                 * @param message Target message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sym.messages.Approval.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Target message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.Approval.Target;

                /**
                 * Decodes a Target message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.Approval.Target;

                /**
                 * Verifies a Target message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Target
                 */
                public static fromObject(object: { [k: string]: any }): sym.messages.Approval.Target;

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @param message Target
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sym.messages.Approval.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Target to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Expiration. */
        interface IExpiration {

            /** Expiration id */
            id?: (sym.models.IUUID|null);

            /** Expiration schema */
            schema?: (sym.models.ISchema|null);

            /** Expiration approval */
            approval?: (sym.messages.IApproval|null);
        }

        /** Represents an Expiration. */
        class Expiration implements IExpiration {

            /**
             * Constructs a new Expiration.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.messages.IExpiration);

            /** Expiration id. */
            public id?: (sym.models.IUUID|null);

            /** Expiration schema. */
            public schema?: (sym.models.ISchema|null);

            /** Expiration approval. */
            public approval?: (sym.messages.IApproval|null);

            /**
             * Creates a new Expiration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expiration instance
             */
            public static create(properties?: sym.messages.IExpiration): sym.messages.Expiration;

            /**
             * Encodes the specified Expiration message. Does not implicitly {@link sym.messages.Expiration.verify|verify} messages.
             * @param message Expiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.messages.IExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expiration message, length delimited. Does not implicitly {@link sym.messages.Expiration.verify|verify} messages.
             * @param message Expiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.messages.IExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expiration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.Expiration;

            /**
             * Decodes an Expiration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.Expiration;

            /**
             * Verifies an Expiration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expiration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expiration
             */
            public static fromObject(object: { [k: string]: any }): sym.messages.Expiration;

            /**
             * Creates a plain object from an Expiration message. Also converts values to other types if specified.
             * @param message Expiration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.messages.Expiration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expiration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EscalationResponse. */
        interface IEscalationResponse {

            /** EscalationResponse ok */
            ok?: (boolean|null);

            /** EscalationResponse error */
            error?: (string|null);
        }

        /** Represents an EscalationResponse. */
        class EscalationResponse implements IEscalationResponse {

            /**
             * Constructs a new EscalationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.messages.IEscalationResponse);

            /** EscalationResponse ok. */
            public ok: boolean;

            /** EscalationResponse error. */
            public error: string;

            /**
             * Creates a new EscalationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EscalationResponse instance
             */
            public static create(properties?: sym.messages.IEscalationResponse): sym.messages.EscalationResponse;

            /**
             * Encodes the specified EscalationResponse message. Does not implicitly {@link sym.messages.EscalationResponse.verify|verify} messages.
             * @param message EscalationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.messages.IEscalationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EscalationResponse message, length delimited. Does not implicitly {@link sym.messages.EscalationResponse.verify|verify} messages.
             * @param message EscalationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.messages.IEscalationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EscalationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EscalationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.EscalationResponse;

            /**
             * Decodes an EscalationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EscalationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.EscalationResponse;

            /**
             * Verifies an EscalationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EscalationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EscalationResponse
             */
            public static fromObject(object: { [k: string]: any }): sym.messages.EscalationResponse;

            /**
             * Creates a plain object from an EscalationResponse message. Also converts values to other types if specified.
             * @param message EscalationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.messages.EscalationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EscalationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExpirationResponse. */
        interface IExpirationResponse {

            /** ExpirationResponse ok */
            ok?: (boolean|null);

            /** ExpirationResponse error */
            error?: (string|null);
        }

        /** Represents an ExpirationResponse. */
        class ExpirationResponse implements IExpirationResponse {

            /**
             * Constructs a new ExpirationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.messages.IExpirationResponse);

            /** ExpirationResponse ok. */
            public ok: boolean;

            /** ExpirationResponse error. */
            public error: string;

            /**
             * Creates a new ExpirationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExpirationResponse instance
             */
            public static create(properties?: sym.messages.IExpirationResponse): sym.messages.ExpirationResponse;

            /**
             * Encodes the specified ExpirationResponse message. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @param message ExpirationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.messages.IExpirationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExpirationResponse message, length delimited. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @param message ExpirationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.messages.IExpirationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.messages.ExpirationResponse;

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.messages.ExpirationResponse;

            /**
             * Verifies an ExpirationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExpirationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExpirationResponse
             */
            public static fromObject(object: { [k: string]: any }): sym.messages.ExpirationResponse;

            /**
             * Creates a plain object from an ExpirationResponse message. Also converts values to other types if specified.
             * @param message ExpirationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.messages.ExpirationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExpirationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace models. */
    namespace models {

        /** Properties of a Resource. */
        interface IResource {

            /** Resource service */
            service?: (sym.enums.Service|null);

            /** Resource id */
            id?: (string|null);
        }

        /** Represents a Resource. */
        class Resource implements IResource {

            /**
             * Constructs a new Resource.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.models.IResource);

            /** Resource service. */
            public service: sym.enums.Service;

            /** Resource id. */
            public id: string;

            /**
             * Creates a new Resource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Resource instance
             */
            public static create(properties?: sym.models.IResource): sym.models.Resource;

            /**
             * Encodes the specified Resource message. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @param message Resource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.models.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Resource message, length delimited. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @param message Resource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.models.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Resource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.models.Resource;

            /**
             * Decodes a Resource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.models.Resource;

            /**
             * Verifies a Resource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Resource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Resource
             */
            public static fromObject(object: { [k: string]: any }): sym.models.Resource;

            /**
             * Creates a plain object from a Resource message. Also converts values to other types if specified.
             * @param message Resource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.models.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Resource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Schema. */
        interface ISchema {

            /** Schema version */
            version?: (number|null);
        }

        /** Represents a Schema. */
        class Schema implements ISchema {

            /**
             * Constructs a new Schema.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.models.ISchema);

            /** Schema version. */
            public version: number;

            /**
             * Creates a new Schema instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Schema instance
             */
            public static create(properties?: sym.models.ISchema): sym.models.Schema;

            /**
             * Encodes the specified Schema message. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @param message Schema message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.models.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Schema message, length delimited. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @param message Schema message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.models.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.models.Schema;

            /**
             * Decodes a Schema message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.models.Schema;

            /**
             * Verifies a Schema message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Schema message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Schema
             */
            public static fromObject(object: { [k: string]: any }): sym.models.Schema;

            /**
             * Creates a plain object from a Schema message. Also converts values to other types if specified.
             * @param message Schema
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.models.Schema, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Schema to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a User. */
        interface IUser {

            /** User uuid */
            uuid?: (sym.models.IUUID|null);

            /** User currentIdentity */
            currentIdentity?: (sym.models.User.IIdentity|null);

            /** User identities */
            identities?: (sym.models.User.IIdentity[]|null);
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.models.IUser);

            /** User uuid. */
            public uuid?: (sym.models.IUUID|null);

            /** User currentIdentity. */
            public currentIdentity?: (sym.models.User.IIdentity|null);

            /** User identities. */
            public identities: sym.models.User.IIdentity[];

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: sym.models.IUser): sym.models.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.models.User;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.models.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): sym.models.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.models.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace User {

            /** Properties of an Identity. */
            interface IIdentity {

                /** Identity service */
                service?: (sym.enums.Service|null);

                /** Identity id */
                id?: (string|null);
            }

            /** Represents an Identity. */
            class Identity implements IIdentity {

                /**
                 * Constructs a new Identity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sym.models.User.IIdentity);

                /** Identity service. */
                public service: sym.enums.Service;

                /** Identity id. */
                public id: string;

                /**
                 * Creates a new Identity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Identity instance
                 */
                public static create(properties?: sym.models.User.IIdentity): sym.models.User.Identity;

                /**
                 * Encodes the specified Identity message. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @param message Identity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sym.models.User.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Identity message, length delimited. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @param message Identity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sym.models.User.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Identity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.models.User.Identity;

                /**
                 * Decodes an Identity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.models.User.Identity;

                /**
                 * Verifies an Identity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Identity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Identity
                 */
                public static fromObject(object: { [k: string]: any }): sym.models.User.Identity;

                /**
                 * Creates a plain object from an Identity message. Also converts values to other types if specified.
                 * @param message Identity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sym.models.User.Identity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Identity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a UUID. */
        interface IUUID {

            /** UUID value */
            value?: (string|null);
        }

        /** Represents a UUID. */
        class UUID implements IUUID {

            /**
             * Constructs a new UUID.
             * @param [properties] Properties to set
             */
            constructor(properties?: sym.models.IUUID);

            /** UUID value. */
            public value: string;

            /**
             * Creates a new UUID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UUID instance
             */
            public static create(properties?: sym.models.IUUID): sym.models.UUID;

            /**
             * Encodes the specified UUID message. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @param message UUID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sym.models.IUUID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UUID message, length delimited. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @param message UUID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sym.models.IUUID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UUID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sym.models.UUID;

            /**
             * Decodes a UUID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sym.models.UUID;

            /**
             * Verifies a UUID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UUID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UUID
             */
            public static fromObject(object: { [k: string]: any }): sym.models.UUID;

            /**
             * Creates a plain object from a UUID message. Also converts values to other types if specified.
             * @param message UUID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sym.models.UUID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UUID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
