package ft;

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
    private final ft.a f24765a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f24766b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f24767c;

    /* renamed from: d  reason: collision with root package name */
    private int f24768d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f24769d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f24770e;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f24769d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                lr.b bVar = (lr.b) this.f24770e;
                byte G = q0.this.f24765a.G();
                if (G == 1) {
                    return q0.this.j(true);
                }
                if (G == 0) {
                    return q0.this.j(false);
                }
                if (G == 6) {
                    q0 q0Var = q0.this;
                    this.f24769d = 1;
                    obj = q0Var.h(bVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else if (G == 8) {
                    return q0.this.f();
                } else {
                    ft.a.x(q0.this.f24765a, "Can't begin reading element, unexpected token", 0, null, 6, null);
                    throw new lr.h();
                }
            }
            return (JsonElement) obj;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(lr.b bVar, Unit unit, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f24770e = bVar;
            return aVar.invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f24772d;

        /* renamed from: e  reason: collision with root package name */
        Object f24773e;

        /* renamed from: i  reason: collision with root package name */
        Object f24774i;

        /* renamed from: o  reason: collision with root package name */
        Object f24775o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f24776p;

        /* renamed from: r  reason: collision with root package name */
        int f24778r;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f24776p = obj;
            this.f24778r |= Integer.MIN_VALUE;
            return q0.this.h(null, this);
        }
    }

    public q0(et.d configuration, ft.a lexer) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        this.f24765a = lexer;
        this.f24766b = configuration.q();
        this.f24767c = configuration.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonElement f() {
        boolean z10;
        byte j10 = this.f24765a.j();
        if (this.f24765a.G() != 4) {
            ArrayList arrayList = new ArrayList();
            while (this.f24765a.e()) {
                arrayList.add(e());
                j10 = this.f24765a.j();
                if (j10 != 4) {
                    ft.a aVar = this.f24765a;
                    if (j10 == 9) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    int i10 = aVar.f24698a;
                    if (!z10) {
                        ft.a.x(aVar, "Expected end of the array or comma", i10, null, 4, null);
                        throw new lr.h();
                    }
                }
            }
            if (j10 == 8) {
                this.f24765a.k((byte) 9);
            } else if (j10 == 4) {
                if (this.f24767c) {
                    this.f24765a.k((byte) 9);
                } else {
                    g0.g(this.f24765a, "array");
                    throw new lr.h();
                }
            }
            return new JsonArray(arrayList);
        }
        ft.a.x(this.f24765a, "Unexpected leading comma", 0, null, 6, null);
        throw new lr.h();
    }

    private final JsonElement g() {
        return (JsonElement) kotlin.a.b(new lr.a(new a(null)), Unit.f32464a);
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
    public final java.lang.Object h(lr.b r20, kotlin.coroutines.Continuation r21) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ft.q0.h(lr.b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final JsonElement i() {
        String o10;
        byte k10 = this.f24765a.k((byte) 6);
        if (this.f24765a.G() != 4) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (true) {
                if (!this.f24765a.e()) {
                    break;
                }
                if (this.f24766b) {
                    o10 = this.f24765a.q();
                } else {
                    o10 = this.f24765a.o();
                }
                this.f24765a.k((byte) 5);
                linkedHashMap.put(o10, e());
                k10 = this.f24765a.j();
                if (k10 != 4) {
                    if (k10 != 7) {
                        ft.a.x(this.f24765a, "Expected end of the object or comma", 0, null, 6, null);
                        throw new lr.h();
                    }
                }
            }
            if (k10 == 6) {
                this.f24765a.k((byte) 7);
            } else if (k10 == 4) {
                if (this.f24767c) {
                    this.f24765a.k((byte) 7);
                } else {
                    g0.h(this.f24765a, null, 1, null);
                    throw new lr.h();
                }
            }
            return new JsonObject(linkedHashMap);
        }
        ft.a.x(this.f24765a, "Unexpected leading comma", 0, null, 6, null);
        throw new lr.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonPrimitive j(boolean z10) {
        String q10;
        if (!this.f24766b && z10) {
            q10 = this.f24765a.o();
        } else {
            q10 = this.f24765a.q();
        }
        String str = q10;
        if (!z10 && Intrinsics.areEqual(str, "null")) {
            return JsonNull.INSTANCE;
        }
        return new et.r(str, z10, null, 4, null);
    }

    public final JsonElement e() {
        JsonElement i10;
        byte G = this.f24765a.G();
        if (G == 1) {
            return j(true);
        }
        if (G == 0) {
            return j(false);
        }
        if (G == 6) {
            int i11 = this.f24768d + 1;
            this.f24768d = i11;
            if (i11 == 200) {
                i10 = g();
            } else {
                i10 = i();
            }
            this.f24768d--;
            return i10;
        } else if (G == 8) {
            return f();
        } else {
            ft.a.x(this.f24765a, "Cannot read Json element because of unexpected " + ft.b.c(G), 0, null, 6, null);
            throw new lr.h();
        }
    }
}
