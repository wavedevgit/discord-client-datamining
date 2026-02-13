package vt;

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
    private final vt.a f52506a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f52507b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52508c;

    /* renamed from: d  reason: collision with root package name */
    private int f52509d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.j implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f52510d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f52511e;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f52510d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                as.b bVar = (as.b) this.f52511e;
                byte G = q0.this.f52506a.G();
                if (G == 1) {
                    return q0.this.j(true);
                }
                if (G == 0) {
                    return q0.this.j(false);
                }
                if (G == 6) {
                    q0 q0Var = q0.this;
                    this.f52510d = 1;
                    obj = q0Var.h(bVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                } else if (G == 8) {
                    return q0.this.f();
                } else {
                    vt.a.x(q0.this.f52506a, "Can't begin reading element, unexpected token", 0, null, 6, null);
                    throw new as.h();
                }
            }
            return (JsonElement) obj;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(as.b bVar, Unit unit, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f52511e = bVar;
            return aVar.invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52513d;

        /* renamed from: e  reason: collision with root package name */
        Object f52514e;

        /* renamed from: i  reason: collision with root package name */
        Object f52515i;

        /* renamed from: o  reason: collision with root package name */
        Object f52516o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f52517p;

        /* renamed from: r  reason: collision with root package name */
        int f52519r;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52517p = obj;
            this.f52519r |= Integer.MIN_VALUE;
            return q0.this.h(null, this);
        }
    }

    public q0(ut.d configuration, vt.a lexer) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        this.f52506a = lexer;
        this.f52507b = configuration.q();
        this.f52508c = configuration.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonElement f() {
        boolean z10;
        byte j10 = this.f52506a.j();
        if (this.f52506a.G() != 4) {
            ArrayList arrayList = new ArrayList();
            while (this.f52506a.e()) {
                arrayList.add(e());
                j10 = this.f52506a.j();
                if (j10 != 4) {
                    vt.a aVar = this.f52506a;
                    if (j10 == 9) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    int i10 = aVar.f52439a;
                    if (!z10) {
                        vt.a.x(aVar, "Expected end of the array or comma", i10, null, 4, null);
                        throw new as.h();
                    }
                }
            }
            if (j10 == 8) {
                this.f52506a.k((byte) 9);
            } else if (j10 == 4) {
                if (this.f52508c) {
                    this.f52506a.k((byte) 9);
                } else {
                    g0.g(this.f52506a, "array");
                    throw new as.h();
                }
            }
            return new JsonArray(arrayList);
        }
        vt.a.x(this.f52506a, "Unexpected leading comma", 0, null, 6, null);
        throw new as.h();
    }

    private final JsonElement g() {
        return (JsonElement) kotlin.a.b(new as.a(new a(null)), Unit.f32556a);
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
    public final java.lang.Object h(as.b r20, kotlin.coroutines.Continuation r21) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vt.q0.h(as.b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final JsonElement i() {
        String o10;
        byte k10 = this.f52506a.k((byte) 6);
        if (this.f52506a.G() != 4) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (true) {
                if (!this.f52506a.e()) {
                    break;
                }
                if (this.f52507b) {
                    o10 = this.f52506a.q();
                } else {
                    o10 = this.f52506a.o();
                }
                this.f52506a.k((byte) 5);
                linkedHashMap.put(o10, e());
                k10 = this.f52506a.j();
                if (k10 != 4) {
                    if (k10 != 7) {
                        vt.a.x(this.f52506a, "Expected end of the object or comma", 0, null, 6, null);
                        throw new as.h();
                    }
                }
            }
            if (k10 == 6) {
                this.f52506a.k((byte) 7);
            } else if (k10 == 4) {
                if (this.f52508c) {
                    this.f52506a.k((byte) 7);
                } else {
                    g0.h(this.f52506a, null, 1, null);
                    throw new as.h();
                }
            }
            return new JsonObject(linkedHashMap);
        }
        vt.a.x(this.f52506a, "Unexpected leading comma", 0, null, 6, null);
        throw new as.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final JsonPrimitive j(boolean z10) {
        String q10;
        if (!this.f52507b && z10) {
            q10 = this.f52506a.o();
        } else {
            q10 = this.f52506a.q();
        }
        String str = q10;
        if (!z10 && Intrinsics.areEqual(str, "null")) {
            return JsonNull.INSTANCE;
        }
        return new ut.r(str, z10, null, 4, null);
    }

    public final JsonElement e() {
        JsonElement i10;
        byte G = this.f52506a.G();
        if (G == 1) {
            return j(true);
        }
        if (G == 0) {
            return j(false);
        }
        if (G == 6) {
            int i11 = this.f52509d + 1;
            this.f52509d = i11;
            if (i11 == 200) {
                i10 = g();
            } else {
                i10 = i();
            }
            this.f52509d--;
            return i10;
        } else if (G == 8) {
            return f();
        } else {
            vt.a.x(this.f52506a, "Cannot read Json element because of unexpected " + vt.b.c(G), 0, null, 6, null);
            throw new as.h();
        }
    }
}
