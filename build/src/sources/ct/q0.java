package ct;

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
    private final ct.a f21388a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21389b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21390c;

    /* renamed from: d  reason: collision with root package name */
    private int f21391d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f21392d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f21393e;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f21392d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ir.b bVar = (ir.b) this.f21393e;
                byte G = q0.this.f21388a.G();
                if (G == 1) {
                    return q0.this.j(true);
                }
                if (G == 0) {
                    return q0.this.j(false);
                }
                if (G == 6) {
                    q0 q0Var = q0.this;
                    this.f21392d = 1;
                    obj = q0Var.h(bVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else if (G == 8) {
                    return q0.this.f();
                } else {
                    ct.a.x(q0.this.f21388a, "Can't begin reading element, unexpected token", 0, null, 6, null);
                    throw new ir.h();
                }
            }
            return (JsonElement) obj;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(ir.b bVar, Unit unit, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f21393e = bVar;
            return aVar.invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f21395d;

        /* renamed from: e  reason: collision with root package name */
        Object f21396e;

        /* renamed from: i  reason: collision with root package name */
        Object f21397i;

        /* renamed from: o  reason: collision with root package name */
        Object f21398o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f21399p;

        /* renamed from: r  reason: collision with root package name */
        int f21401r;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f21399p = obj;
            this.f21401r |= Integer.MIN_VALUE;
            return q0.this.h(null, this);
        }
    }

    public q0(bt.d configuration, ct.a lexer) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        this.f21388a = lexer;
        this.f21389b = configuration.q();
        this.f21390c = configuration.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonElement f() {
        boolean z10;
        byte j10 = this.f21388a.j();
        if (this.f21388a.G() != 4) {
            ArrayList arrayList = new ArrayList();
            while (this.f21388a.e()) {
                arrayList.add(e());
                j10 = this.f21388a.j();
                if (j10 != 4) {
                    ct.a aVar = this.f21388a;
                    if (j10 == 9) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    int i10 = aVar.f21321a;
                    if (!z10) {
                        ct.a.x(aVar, "Expected end of the array or comma", i10, null, 4, null);
                        throw new ir.h();
                    }
                }
            }
            if (j10 == 8) {
                this.f21388a.k((byte) 9);
            } else if (j10 == 4) {
                if (this.f21390c) {
                    this.f21388a.k((byte) 9);
                } else {
                    g0.g(this.f21388a, "array");
                    throw new ir.h();
                }
            }
            return new JsonArray(arrayList);
        }
        ct.a.x(this.f21388a, "Unexpected leading comma", 0, null, 6, null);
        throw new ir.h();
    }

    private final JsonElement g() {
        return (JsonElement) kotlin.a.b(new ir.a(new a(null)), Unit.f33298a);
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
    public final java.lang.Object h(ir.b r20, kotlin.coroutines.Continuation r21) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ct.q0.h(ir.b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final JsonElement i() {
        String o10;
        byte k10 = this.f21388a.k((byte) 6);
        if (this.f21388a.G() != 4) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (true) {
                if (!this.f21388a.e()) {
                    break;
                }
                if (this.f21389b) {
                    o10 = this.f21388a.q();
                } else {
                    o10 = this.f21388a.o();
                }
                this.f21388a.k((byte) 5);
                linkedHashMap.put(o10, e());
                k10 = this.f21388a.j();
                if (k10 != 4) {
                    if (k10 != 7) {
                        ct.a.x(this.f21388a, "Expected end of the object or comma", 0, null, 6, null);
                        throw new ir.h();
                    }
                }
            }
            if (k10 == 6) {
                this.f21388a.k((byte) 7);
            } else if (k10 == 4) {
                if (this.f21390c) {
                    this.f21388a.k((byte) 7);
                } else {
                    g0.h(this.f21388a, null, 1, null);
                    throw new ir.h();
                }
            }
            return new JsonObject(linkedHashMap);
        }
        ct.a.x(this.f21388a, "Unexpected leading comma", 0, null, 6, null);
        throw new ir.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonPrimitive j(boolean z10) {
        String q10;
        if (!this.f21389b && z10) {
            q10 = this.f21388a.o();
        } else {
            q10 = this.f21388a.q();
        }
        String str = q10;
        if (!z10 && Intrinsics.areEqual(str, "null")) {
            return JsonNull.INSTANCE;
        }
        return new bt.r(str, z10, null, 4, null);
    }

    public final JsonElement e() {
        JsonElement i10;
        byte G = this.f21388a.G();
        if (G == 1) {
            return j(true);
        }
        if (G == 0) {
            return j(false);
        }
        if (G == 6) {
            int i11 = this.f21391d + 1;
            this.f21391d = i11;
            if (i11 == 200) {
                i10 = g();
            } else {
                i10 = i();
            }
            this.f21391d--;
            return i10;
        } else if (G == 8) {
            return f();
        } else {
            ct.a.x(this.f21388a, "Cannot read Json element because of unexpected " + ct.b.c(G), 0, null, 6, null);
            throw new ir.h();
        }
    }
}
