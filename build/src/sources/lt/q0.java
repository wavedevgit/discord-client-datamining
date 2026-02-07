package lt;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 {

    /* renamed from: a  reason: collision with root package name */
    private final lt.a f36747a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36748b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36749c;

    /* renamed from: d  reason: collision with root package name */
    private int f36750d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f36751d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f36752e;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f36751d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                qr.b bVar = (qr.b) this.f36752e;
                byte G = q0.this.f36747a.G();
                if (G == 1) {
                    return q0.this.j(true);
                }
                if (G == 0) {
                    return q0.this.j(false);
                }
                if (G == 6) {
                    q0 q0Var = q0.this;
                    this.f36751d = 1;
                    obj = q0Var.h(bVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else if (G == 8) {
                    return q0.this.f();
                } else {
                    lt.a.x(q0.this.f36747a, "Can't begin reading element, unexpected token", 0, null, 6, null);
                    throw new qr.h();
                }
            }
            return (JsonElement) obj;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(qr.b bVar, Unit unit, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f36752e = bVar;
            return aVar.invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f36754d;

        /* renamed from: e  reason: collision with root package name */
        Object f36755e;

        /* renamed from: i  reason: collision with root package name */
        Object f36756i;

        /* renamed from: o  reason: collision with root package name */
        Object f36757o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f36758p;

        /* renamed from: r  reason: collision with root package name */
        int f36760r;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f36758p = obj;
            this.f36760r |= Integer.MIN_VALUE;
            return q0.this.h(null, this);
        }
    }

    public q0(kt.d configuration, lt.a lexer) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        this.f36747a = lexer;
        this.f36748b = configuration.q();
        this.f36749c = configuration.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonElement f() {
        boolean z10;
        byte j10 = this.f36747a.j();
        if (this.f36747a.G() != 4) {
            ArrayList arrayList = new ArrayList();
            while (this.f36747a.e()) {
                arrayList.add(e());
                j10 = this.f36747a.j();
                if (j10 != 4) {
                    lt.a aVar = this.f36747a;
                    if (j10 == 9) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    int i10 = aVar.f36680a;
                    if (!z10) {
                        lt.a.x(aVar, "Expected end of the array or comma", i10, null, 4, null);
                        throw new qr.h();
                    }
                }
            }
            if (j10 == 8) {
                this.f36747a.k((byte) 9);
            } else if (j10 == 4) {
                if (this.f36749c) {
                    this.f36747a.k((byte) 9);
                } else {
                    g0.g(this.f36747a, "array");
                    throw new qr.h();
                }
            }
            return new JsonArray(arrayList);
        }
        lt.a.x(this.f36747a, "Unexpected leading comma", 0, null, 6, null);
        throw new qr.h();
    }

    private final JsonElement g() {
        return (JsonElement) kotlin.a.b(new qr.a(new a(null)), Unit.f32056a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x002a  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x00ad  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00c4  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x00ca  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00d0  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:26:0x0096 -> B:27:0x00a0). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object h(qr.b r20, kotlin.coroutines.Continuation r21) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.q0.h(qr.b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final JsonElement i() {
        String o10;
        byte k10 = this.f36747a.k((byte) 6);
        if (this.f36747a.G() != 4) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (true) {
                if (!this.f36747a.e()) {
                    break;
                }
                if (this.f36748b) {
                    o10 = this.f36747a.q();
                } else {
                    o10 = this.f36747a.o();
                }
                this.f36747a.k((byte) 5);
                linkedHashMap.put(o10, e());
                k10 = this.f36747a.j();
                if (k10 != 4) {
                    if (k10 != 7) {
                        lt.a.x(this.f36747a, "Expected end of the object or comma", 0, null, 6, null);
                        throw new qr.h();
                    }
                }
            }
            if (k10 == 6) {
                this.f36747a.k((byte) 7);
            } else if (k10 == 4) {
                if (this.f36749c) {
                    this.f36747a.k((byte) 7);
                } else {
                    g0.h(this.f36747a, null, 1, null);
                    throw new qr.h();
                }
            }
            return new JsonObject(linkedHashMap);
        }
        lt.a.x(this.f36747a, "Unexpected leading comma", 0, null, 6, null);
        throw new qr.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonPrimitive j(boolean z10) {
        String q10;
        if (!this.f36748b && z10) {
            q10 = this.f36747a.o();
        } else {
            q10 = this.f36747a.q();
        }
        String str = q10;
        if (!z10 && Intrinsics.areEqual(str, "null")) {
            return JsonNull.INSTANCE;
        }
        return new kt.r(str, z10, null, 4, null);
    }

    public final JsonElement e() {
        JsonElement i10;
        byte G = this.f36747a.G();
        if (G == 1) {
            return j(true);
        }
        if (G == 0) {
            return j(false);
        }
        if (G == 6) {
            int i11 = this.f36750d + 1;
            this.f36750d = i11;
            if (i11 == 200) {
                i10 = g();
            } else {
                i10 = i();
            }
            this.f36750d--;
            return i10;
        } else if (G == 8) {
            return f();
        } else {
            lt.a.x(this.f36747a, "Cannot read Json element because of unexpected " + lt.b.c(G), 0, null, 6, null);
            throw new qr.h();
        }
    }
}
