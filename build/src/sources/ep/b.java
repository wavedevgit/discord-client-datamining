package ep;

import android.content.Context;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import cs.j;
import ep.b;
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
import ps.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f21935e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f21936a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f21937b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f21938c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f21939d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: ep.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0325b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21940d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ep.a f21942i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f21943o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f21944p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0325b(ep.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f21942i = aVar;
            this.f21943o = str;
            this.f21944p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0325b(this.f21942i, this.f21943o, this.f21944p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f21940d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f21936a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f21942i.name() + "," + b.this.f21937b.format(new Date()) + "," + this.f21943o + "," + this.f21944p;
                    FileWriter fileWriter = new FileWriter(b.this.f21936a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    cs.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f31765a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0325b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21945d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f21945d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f21936a.delete());
                } catch (Exception unused) {
                    return Unit.f31765a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21947d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f21948e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f21949i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f21950o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ ep.a f21951p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, ep.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f21948e = str;
            this.f21949i = bVar;
            this.f21950o = str2;
            this.f21951p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f21948e, this.f21949i, this.f21950o, this.f21951p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f21947d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f21948e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f21949i;
                String str = this.f21950o;
                ep.a aVar = this.f21951p;
                this.f21947d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21952d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f21954i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ ep.a f21955o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, ep.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f21954i = str;
            this.f21955o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, ep.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f21954i, this.f21955o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f21952d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f21936a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f21936a;
                    final String str = this.f21954i;
                    final ep.a aVar = this.f21955o;
                    j.f(file, null, new Function1() { // from class: ep.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f21936a = new File(context.getCacheDir(), "persona_log.csv");
        this.f21937b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f21938c = i.a(m0.a().V0(z.b(null, 1, null)));
        this.f21939d = CoroutineDispatcher.a2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, ep.a aVar, String str2, Continuation continuation) {
        Object g10 = ps.g.g(this.f21939d, new C0325b(aVar, str, str2, null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = ps.g.g(this.f21939d, new c(null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    public final void f(String subsystem, ep.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        ps.g.d(this.f21938c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, ep.a aVar, Continuation continuation) {
        return ps.g.g(this.f21939d, new e(str, aVar, null), continuation);
    }
}
