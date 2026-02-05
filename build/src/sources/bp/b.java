package bp;

import android.content.Context;
import bp.b;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import kotlinx.coroutines.z;
import ms.m0;
import zr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f7071e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f7072a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f7073b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f7074c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f7075d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: bp.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0126b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7076d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ bp.a f7078i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f7079o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f7080p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0126b(bp.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f7078i = aVar;
            this.f7079o = str;
            this.f7080p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0126b(this.f7078i, this.f7079o, this.f7080p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f7076d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f7072a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f7078i.name() + "," + b.this.f7073b.format(new Date()) + "," + this.f7079o + "," + this.f7080p;
                    FileWriter fileWriter = new FileWriter(b.this.f7072a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    zr.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f31988a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0126b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7081d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f7081d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f7072a.delete());
                } catch (Exception unused) {
                    return Unit.f31988a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7083d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f7084e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f7085i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f7086o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ bp.a f7087p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, bp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f7084e = str;
            this.f7085i = bVar;
            this.f7086o = str2;
            this.f7087p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f7084e, this.f7085i, this.f7086o, this.f7087p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f7083d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f7084e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f7085i;
                String str = this.f7086o;
                bp.a aVar = this.f7087p;
                this.f7083d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7088d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f7090i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ bp.a f7091o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, bp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f7090i = str;
            this.f7091o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, bp.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f7090i, this.f7091o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f7088d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f7072a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f7072a;
                    final String str = this.f7090i;
                    final bp.a aVar = this.f7091o;
                    j.f(file, null, new Function1() { // from class: bp.c
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit k10;
                            k10 = b.e.k(str, aVar, sb2, (String) obj2);
                            return k10;
                        }
                    }, 1, null);
                    return sb2.toString();
                } catch (Exception unused) {
                    return null;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f7072a = new File(context.getCacheDir(), "persona_log.csv");
        this.f7073b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f7074c = i.a(m0.a().V0(z.b(null, 1, null)));
        this.f7075d = CoroutineDispatcher.c2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, bp.a aVar, String str2, Continuation continuation) {
        Object g10 = ms.g.g(this.f7075d, new C0126b(aVar, str, str2, null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = ms.g.g(this.f7075d, new c(null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public final void f(String subsystem, bp.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        ms.g.d(this.f7074c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, bp.a aVar, Continuation continuation) {
        return ms.g.g(this.f7075d, new e(str, aVar, null), continuation);
    }
}
