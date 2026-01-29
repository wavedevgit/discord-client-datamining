package vo;

import android.content.Context;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import gs.m0;
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
import tr.j;
import vo.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f51748e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f51749a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f51750b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f51751c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f51752d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: vo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0704b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51753d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ vo.a f51755i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f51756o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f51757p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0704b(vo.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f51755i = aVar;
            this.f51756o = str;
            this.f51757p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0704b(this.f51755i, this.f51756o, this.f51757p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51753d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f51749a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f51755i.name() + "," + b.this.f51750b.format(new Date()) + "," + this.f51756o + "," + this.f51757p;
                    FileWriter fileWriter = new FileWriter(b.this.f51749a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    tr.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f33282a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0704b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51758d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51758d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f51749a.delete());
                } catch (Exception unused) {
                    return Unit.f33282a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51760d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f51761e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f51762i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f51763o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ vo.a f51764p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, vo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f51761e = str;
            this.f51762i = bVar;
            this.f51763o = str2;
            this.f51764p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f51761e, this.f51762i, this.f51763o, this.f51764p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f51760d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f51761e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f51762i;
                String str = this.f51763o;
                vo.a aVar = this.f51764p;
                this.f51760d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51765d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f51767i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ vo.a f51768o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, vo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f51767i = str;
            this.f51768o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, vo.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f51767i, this.f51768o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51765d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f51749a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f51749a;
                    final String str = this.f51767i;
                    final vo.a aVar = this.f51768o;
                    j.f(file, null, new Function1() { // from class: vo.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f51749a = new File(context.getCacheDir(), "persona_log.csv");
        this.f51750b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f51751c = i.a(m0.a().U0(z.b(null, 1, null)));
        this.f51752d = CoroutineDispatcher.c2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, vo.a aVar, String str2, Continuation continuation) {
        Object g10 = gs.g.g(this.f51752d, new C0704b(aVar, str, str2, null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = gs.g.g(this.f51752d, new c(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    public final void f(String subsystem, vo.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        gs.g.d(this.f51751c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, vo.a aVar, Continuation continuation) {
        return gs.g.g(this.f51752d, new e(str, aVar, null), continuation);
    }
}
