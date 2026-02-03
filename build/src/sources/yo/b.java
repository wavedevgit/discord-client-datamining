package yo;

import android.content.Context;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import js.m0;
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
import wr.j;
import yo.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55129e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f55130a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f55131b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f55132c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f55133d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: yo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0769b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55134d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ yo.a f55136i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f55137o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f55138p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0769b(yo.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f55136i = aVar;
            this.f55137o = str;
            this.f55138p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0769b(this.f55136i, this.f55137o, this.f55138p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f55134d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f55130a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f55136i.name() + "," + b.this.f55131b.format(new Date()) + "," + this.f55137o + "," + this.f55138p;
                    FileWriter fileWriter = new FileWriter(b.this.f55130a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    wr.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f32464a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0769b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55139d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f55139d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f55130a.delete());
                } catch (Exception unused) {
                    return Unit.f32464a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55141d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f55142e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f55143i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f55144o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ yo.a f55145p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, yo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f55142e = str;
            this.f55143i = bVar;
            this.f55144o = str2;
            this.f55145p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f55142e, this.f55143i, this.f55144o, this.f55145p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f55141d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f55142e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f55143i;
                String str = this.f55144o;
                yo.a aVar = this.f55145p;
                this.f55141d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55146d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f55148i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ yo.a f55149o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, yo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f55148i = str;
            this.f55149o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, yo.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f55148i, this.f55149o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f55146d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f55130a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f55130a;
                    final String str = this.f55148i;
                    final yo.a aVar = this.f55149o;
                    j.f(file, null, new Function1() { // from class: yo.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f55130a = new File(context.getCacheDir(), "persona_log.csv");
        this.f55131b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f55132c = i.a(m0.a().V0(z.b(null, 1, null)));
        this.f55133d = CoroutineDispatcher.c2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, yo.a aVar, String str2, Continuation continuation) {
        Object g10 = js.g.g(this.f55133d, new C0769b(aVar, str, str2, null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = js.g.g(this.f55133d, new c(null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    public final void f(String subsystem, yo.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        js.g.d(this.f55132c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, yo.a aVar, Continuation continuation) {
        return js.g.g(this.f55133d, new e(str, aVar, null), continuation);
    }
}
