package dp;

import android.content.Context;
import bs.j;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import dp.b;
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
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f20987e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f20988a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f20989b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f20990c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f20991d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: dp.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0277b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20992d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ dp.a f20994i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f20995o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f20996p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0277b(dp.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f20994i = aVar;
            this.f20995o = str;
            this.f20996p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0277b(this.f20994i, this.f20995o, this.f20996p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f20992d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f20988a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f20994i.name() + "," + b.this.f20989b.format(new Date()) + "," + this.f20995o + "," + this.f20996p;
                    FileWriter fileWriter = new FileWriter(b.this.f20988a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    bs.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f32008a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0277b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20997d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f20997d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f20988a.delete());
                } catch (Exception unused) {
                    return Unit.f32008a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20999d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f21000e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f21001i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f21002o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ dp.a f21003p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, dp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f21000e = str;
            this.f21001i = bVar;
            this.f21002o = str2;
            this.f21003p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f21000e, this.f21001i, this.f21002o, this.f21003p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f20999d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f21000e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f21001i;
                String str = this.f21002o;
                dp.a aVar = this.f21003p;
                this.f20999d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21004d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f21006i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ dp.a f21007o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, dp.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f21006i = str;
            this.f21007o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, dp.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f21006i, this.f21007o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f21004d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f20988a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f20988a;
                    final String str = this.f21006i;
                    final dp.a aVar = this.f21007o;
                    j.f(file, null, new Function1() { // from class: dp.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f20988a = new File(context.getCacheDir(), "persona_log.csv");
        this.f20989b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f20990c = i.a(m0.a().Y0(z.b(null, 1, null)));
        this.f20991d = CoroutineDispatcher.b2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, dp.a aVar, String str2, Continuation continuation) {
        Object g10 = os.g.g(this.f20991d, new C0277b(aVar, str, str2, null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32008a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = os.g.g(this.f20991d, new c(null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32008a;
    }

    public final void f(String subsystem, dp.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        os.g.d(this.f20990c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, dp.a aVar, Continuation continuation) {
        return os.g.g(this.f20991d, new e(str, aVar, null), continuation);
    }
}
