package j2;

import h2.m;
import i2.a0;
import i2.b0;
import i2.c0;
import i2.d0;
import i2.f;
import i2.g;
import i2.h;
import i2.i;
import i2.j;
import i2.k;
import i2.l;
import i2.n;
import i2.o;
import i2.p;
import i2.q;
import i2.r;
import i2.s;
import i2.t;
import i2.u;
import i2.v;
import i2.w;
import i2.x;
import i2.y;
import i2.z;
import j2.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends e {

    /* renamed from: r  reason: collision with root package name */
    public static final a f31387r = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private final i2.e f31388q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a(String type, String str) {
            Object b10;
            Intrinsics.checkNotNullParameter(type, "type");
            try {
                c.a aVar = c.f31386a;
                d dVar = new d(new b0(), null, 2, null);
                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_ABORT_ERROR")) {
                    b10 = aVar.b(new i2.a(), str, dVar);
                } else {
                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_CONSTRAINT_ERROR")) {
                        b10 = aVar.b(new i2.b(), str, dVar);
                    } else {
                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_DATA_CLONE_ERROR")) {
                            b10 = aVar.b(new i2.c(), str, dVar);
                        } else {
                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_DATA_ERROR")) {
                                b10 = aVar.b(new i2.d(), str, dVar);
                            } else {
                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_ENCODING_ERROR")) {
                                    b10 = aVar.b(new f(), str, dVar);
                                } else {
                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_HIERARCHY_REQUEST_ERROR")) {
                                        b10 = aVar.b(new g(), str, dVar);
                                    } else {
                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_IN_USE_ATTRIBUTE_ERROR")) {
                                            b10 = aVar.b(new h(), str, dVar);
                                        } else {
                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_INVALID_CHARACTER_ERROR")) {
                                                b10 = aVar.b(new i(), str, dVar);
                                            } else {
                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_INVALID_MODIFICATION_ERROR")) {
                                                    b10 = aVar.b(new j(), str, dVar);
                                                } else {
                                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_INVALID_NODE_TYPE_ERROR")) {
                                                        b10 = aVar.b(new k(), str, dVar);
                                                    } else {
                                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_INVALID_STATE_ERROR")) {
                                                            b10 = aVar.b(new l(), str, dVar);
                                                        } else {
                                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NAMESPACE_ERROR")) {
                                                                b10 = aVar.b(new i2.m(), str, dVar);
                                                            } else {
                                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NETWORK_ERROR")) {
                                                                    b10 = aVar.b(new n(), str, dVar);
                                                                } else {
                                                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NO_MODIFICATION_ALLOWED_ERROR")) {
                                                                        b10 = aVar.b(new o(), str, dVar);
                                                                    } else {
                                                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NOT_ALLOWED_ERROR")) {
                                                                            b10 = aVar.b(new p(), str, dVar);
                                                                        } else {
                                                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NOT_FOUND_ERROR")) {
                                                                                b10 = aVar.b(new q(), str, dVar);
                                                                            } else {
                                                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NOT_READABLE_ERROR")) {
                                                                                    b10 = aVar.b(new r(), str, dVar);
                                                                                } else {
                                                                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_NOT_SUPPORTED_ERROR")) {
                                                                                        b10 = aVar.b(new s(), str, dVar);
                                                                                    } else {
                                                                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_OPERATION_ERROR")) {
                                                                                            b10 = aVar.b(new t(), str, dVar);
                                                                                        } else {
                                                                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_OPT_OUT_ERROR")) {
                                                                                                b10 = aVar.b(new u(), str, dVar);
                                                                                            } else {
                                                                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_QUOTA_EXCEEDED_ERROR")) {
                                                                                                    b10 = aVar.b(new v(), str, dVar);
                                                                                                } else {
                                                                                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_READ_ONLY_ERROR")) {
                                                                                                        b10 = aVar.b(new w(), str, dVar);
                                                                                                    } else {
                                                                                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_SECURITY_ERROR")) {
                                                                                                            b10 = aVar.b(new x(), str, dVar);
                                                                                                        } else {
                                                                                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_SYNTAX_ERROR")) {
                                                                                                                b10 = aVar.b(new y(), str, dVar);
                                                                                                            } else {
                                                                                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_TIMEOUT_ERROR")) {
                                                                                                                    b10 = aVar.b(new z(), str, dVar);
                                                                                                                } else {
                                                                                                                    if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_TRANSACTION_INACTIVE_ERROR")) {
                                                                                                                        b10 = aVar.b(new a0(), str, dVar);
                                                                                                                    } else {
                                                                                                                        if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_UNKNOWN_ERROR")) {
                                                                                                                            b10 = aVar.b(new b0(), str, dVar);
                                                                                                                        } else {
                                                                                                                            if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_VERSION_ERROR")) {
                                                                                                                                b10 = aVar.b(new c0(), str, dVar);
                                                                                                                            } else {
                                                                                                                                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/androidx.credentials.TYPE_WRONG_DOCUMENT_ERROR")) {
                                                                                                                                    b10 = aVar.b(new d0(), str, dVar);
                                                                                                                                } else {
                                                                                                                                    throw new k2.b();
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return (m) b10;
            } catch (k2.b unused) {
                return new h2.l(type, str);
            }
        }

        private a() {
        }
    }

    public /* synthetic */ d(i2.e eVar, CharSequence charSequence, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(eVar, (i10 & 2) != 0 ? null : charSequence);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(i2.e domError, CharSequence charSequence) {
        super("androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION/" + domError.a(), charSequence);
        Intrinsics.checkNotNullParameter(domError, "domError");
        this.f31388q = domError;
    }
}
