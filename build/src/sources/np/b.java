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
    public static final a f38212e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f38213a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f38214b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f38215c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f38216d;

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
        int f38217d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ np.a f38219i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f38220o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f38221p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0538b(np.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f38219i = aVar;
            this.f38220o = str;
            this.f38221p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0538b(this.f38219i, this.f38220o, this.f38221p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f38217d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f38213a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f38219i.name() + "," + b.this.f38214b.format(new Date()) + "," + this.f38220o + "," + this.f38221p;
                    FileWriter fileWriter = new FileWriter(b.this.f38213a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    ls.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f31988a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0538b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38222d;

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
            if (this.f38222d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f38213a.delete());
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
        int f38224d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f38225e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f38226i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f38227o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ np.a f38228p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, np.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f38225e = str;
            this.f38226i = bVar;
            this.f38227o = str2;
            this.f38228p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f38225e, this.f38226i, this.f38227o, this.f38228p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f38224d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f38225e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f38226i;
                String str = this.f38227o;
                np.a aVar = this.f38228p;
                this.f38224d = 1;
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
        int f38229d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f38231i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ np.a f38232o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, np.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f38231i = str;
            this.f38232o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, np.a aVar, StringBuilder sb2, String str2) {
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
            return new e(this.f38231i, this.f38232o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f38229d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f38213a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f38213a;
                    final String str = this.f38231i;
                    final np.a aVar = this.f38232o;
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f38213a = new File(context.getCacheDir(), "persona_log.csv");
        this.f38214b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f38215c = i.a(m0.a().O0(z.b(null, 1, null)));
        this.f38216d = CoroutineDispatcher.E1(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, np.a aVar, String str2, Continuation continuation) {
        Object g10 = ys.g.g(this.f38216d, new C0538b(aVar, str, str2, null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = ys.g.g(this.f38216d, new c(null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public final void f(String subsystem, np.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        ys.g.d(this.f38215c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, np.a aVar, Continuation continuation) {
        return ys.g.g(this.f38216d, new e(str, aVar, null), continuation);
    }
}
