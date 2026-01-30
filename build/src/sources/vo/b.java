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
    public static final a f51764e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f51765a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f51766b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f51767c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f51768d;

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
        int f51769d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ vo.a f51771i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f51772o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f51773p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0704b(vo.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f51771i = aVar;
            this.f51772o = str;
            this.f51773p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0704b(this.f51771i, this.f51772o, this.f51773p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51769d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f51765a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f51771i.name() + "," + b.this.f51766b.format(new Date()) + "," + this.f51772o + "," + this.f51773p;
                    FileWriter fileWriter = new FileWriter(b.this.f51765a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    tr.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f33298a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0704b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51774d;

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
            if (this.f51774d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f51765a.delete());
                } catch (Exception unused) {
                    return Unit.f33298a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51776d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f51777e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f51778i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f51779o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ vo.a f51780p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, vo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f51777e = str;
            this.f51778i = bVar;
            this.f51779o = str2;
            this.f51780p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f51777e, this.f51778i, this.f51779o, this.f51780p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f51776d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f51777e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f51778i;
                String str = this.f51779o;
                vo.a aVar = this.f51780p;
                this.f51776d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51781d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f51783i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ vo.a f51784o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, vo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f51783i = str;
            this.f51784o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, vo.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f51783i, this.f51784o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51781d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f51765a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f51765a;
                    final String str = this.f51783i;
                    final vo.a aVar = this.f51784o;
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f51765a = new File(context.getCacheDir(), "persona_log.csv");
        this.f51766b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f51767c = i.a(m0.a().U0(z.b(null, 1, null)));
        this.f51768d = CoroutineDispatcher.c2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, vo.a aVar, String str2, Continuation continuation) {
        Object g10 = gs.g.g(this.f51768d, new C0704b(aVar, str, str2, null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = gs.g.g(this.f51768d, new c(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }

    public final void f(String subsystem, vo.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        gs.g.d(this.f51767c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, vo.a aVar, Continuation continuation) {
        return gs.g.g(this.f51768d, new e(str, aVar, null), continuation);
    }
}
