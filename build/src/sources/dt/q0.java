package dt;

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
    private final dt.a f22447a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22448b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f22449c;

    /* renamed from: d  reason: collision with root package name */
    private int f22450d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f22451d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f22452e;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f22451d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                jr.b bVar = (jr.b) this.f22452e;
                byte G = q0.this.f22447a.G();
                if (G == 1) {
                    return q0.this.j(true);
                }
                if (G == 0) {
                    return q0.this.j(false);
                }
                if (G == 6) {
                    q0 q0Var = q0.this;
                    this.f22451d = 1;
                    obj = q0Var.h(bVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else if (G == 8) {
                    return q0.this.f();
                } else {
                    dt.a.x(q0.this.f22447a, "Can't begin reading element, unexpected token", 0, null, 6, null);
                    throw new jr.h();
                }
            }
            return (JsonElement) obj;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(jr.b bVar, Unit unit, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f22452e = bVar;
            return aVar.invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f22454d;

        /* renamed from: e  reason: collision with root package name */
        Object f22455e;

        /* renamed from: i  reason: collision with root package name */
        Object f22456i;

        /* renamed from: o  reason: collision with root package name */
        Object f22457o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f22458p;

        /* renamed from: r  reason: collision with root package name */
        int f22460r;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f22458p = obj;
            this.f22460r |= Integer.MIN_VALUE;
            return q0.this.h(null, this);
        }
    }

    public q0(ct.d configuration, dt.a lexer) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        this.f22447a = lexer;
        this.f22448b = configuration.q();
        this.f22449c = configuration.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonElement f() {
        boolean z10;
        byte j10 = this.f22447a.j();
        if (this.f22447a.G() != 4) {
            ArrayList arrayList = new ArrayList();
            while (this.f22447a.e()) {
                arrayList.add(e());
                j10 = this.f22447a.j();
                if (j10 != 4) {
                    dt.a aVar = this.f22447a;
                    if (j10 == 9) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    int i10 = aVar.f22380a;
                    if (!z10) {
                        dt.a.x(aVar, "Expected end of the array or comma", i10, null, 4, null);
                        throw new jr.h();
                    }
                }
            }
            if (j10 == 8) {
                this.f22447a.k((byte) 9);
            } else if (j10 == 4) {
                if (this.f22449c) {
                    this.f22447a.k((byte) 9);
                } else {
                    g0.g(this.f22447a, "array");
                    throw new jr.h();
                }
            }
            return new JsonArray(arrayList);
        }
        dt.a.x(this.f22447a, "Unexpected leading comma", 0, null, 6, null);
        throw new jr.h();
    }

    private final JsonElement g() {
        return (JsonElement) kotlin.a.b(new jr.a(new a(null)), Unit.f33074a);
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
    public final java.lang.Object h(jr.b r20, kotlin.coroutines.Continuation r21) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: dt.q0.h(jr.b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final JsonElement i() {
        String o10;
        byte k10 = this.f22447a.k((byte) 6);
        if (this.f22447a.G() != 4) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (true) {
                if (!this.f22447a.e()) {
                    break;
                }
                if (this.f22448b) {
                    o10 = this.f22447a.q();
                } else {
                    o10 = this.f22447a.o();
                }
                this.f22447a.k((byte) 5);
                linkedHashMap.put(o10, e());
                k10 = this.f22447a.j();
                if (k10 != 4) {
                    if (k10 != 7) {
                        dt.a.x(this.f22447a, "Expected end of the object or comma", 0, null, 6, null);
                        throw new jr.h();
                    }
                }
            }
            if (k10 == 6) {
                this.f22447a.k((byte) 7);
            } else if (k10 == 4) {
                if (this.f22449c) {
                    this.f22447a.k((byte) 7);
                } else {
                    g0.h(this.f22447a, null, 1, null);
                    throw new jr.h();
                }
            }
            return new JsonObject(linkedHashMap);
        }
        dt.a.x(this.f22447a, "Unexpected leading comma", 0, null, 6, null);
        throw new jr.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonPrimitive j(boolean z10) {
        String q10;
        if (!this.f22448b && z10) {
            q10 = this.f22447a.o();
        } else {
            q10 = this.f22447a.q();
        }
        String str = q10;
        if (!z10 && Intrinsics.areEqual(str, "null")) {
            return JsonNull.INSTANCE;
        }
        return new ct.r(str, z10, null, 4, null);
    }

    public final JsonElement e() {
        JsonElement i10;
        byte G = this.f22447a.G();
        if (G == 1) {
            return j(true);
        }
        if (G == 0) {
            return j(false);
        }
        if (G == 6) {
            int i11 = this.f22450d + 1;
            this.f22450d = i11;
            if (i11 == 200) {
                i10 = g();
            } else {
                i10 = i();
            }
            this.f22450d--;
            return i10;
        } else if (G == 8) {
            return f();
        } else {
            dt.a.x(this.f22447a, "Cannot read Json element because of unexpected " + dt.b.c(G), 0, null, 6, null);
            throw new jr.h();
        }
    }
}
