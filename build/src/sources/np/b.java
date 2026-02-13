package np;

import android.content.Context;
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
import ls.j;
import np.b;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f38780e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f38781a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f38782b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f38783c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f38784d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: np.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0538b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38785d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ np.a f38787i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f38788o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f38789p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0538b(np.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f38787i = aVar;
            this.f38788o = str;
            this.f38789p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0538b(this.f38787i, this.f38788o, this.f38789p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f38785d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f38781a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f38787i.name() + "," + b.this.f38782b.format(new Date()) + "," + this.f38788o + "," + this.f38789p;
                    FileWriter fileWriter = new FileWriter(b.this.f38781a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    ls.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f32556a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0538b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38790d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f38790d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f38781a.delete());
                } catch (Exception unused) {
                    return Unit.f32556a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38792d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f38793e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f38794i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f38795o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ np.a f38796p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, np.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f38793e = str;
            this.f38794i = bVar;
            this.f38795o = str2;
            this.f38796p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f38793e, this.f38794i, this.f38795o, this.f38796p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f38792d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f38793e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f38794i;
                String str = this.f38795o;
                np.a aVar = this.f38796p;
                this.f38792d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38797d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f38799i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ np.a f38800o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, np.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f38799i = str;
            this.f38800o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, np.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f32556a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f38799i, this.f38800o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f38797d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f38781a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f38781a;
                    final String str = this.f38799i;
                    final np.a aVar = this.f38800o;
                    j.f(file, null, new Function1() { // from class: np.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f38781a = new File(context.getCacheDir(), "persona_log.csv");
        this.f38782b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f38783c = i.a(m0.a().O0(z.b(null, 1, null)));
        this.f38784d = CoroutineDispatcher.E1(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, np.a aVar, String str2, Continuation continuation) {
        Object g10 = ys.g.g(this.f38784d, new C0538b(aVar, str, str2, null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = ys.g.g(this.f38784d, new c(null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }

    public final void f(String subsystem, np.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        ys.g.d(this.f38783c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, np.a aVar, Continuation continuation) {
        return ys.g.g(this.f38784d, new e(str, aVar, null), continuation);
    }
}
