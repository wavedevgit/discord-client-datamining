package wo;

import android.content.Context;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import hs.m0;
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
import ur.j;
import wo.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f52840e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f52841a;

    /* renamed from: b  reason: collision with root package name */
    private final SimpleDateFormat f52842b;

    /* renamed from: c  reason: collision with root package name */
    private final CoroutineScope f52843c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f52844d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: wo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0732b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52845d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ wo.a f52847i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f52848o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f52849p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0732b(wo.a aVar, String str, String str2, Continuation continuation) {
            super(2, continuation);
            this.f52847i = aVar;
            this.f52848o = str;
            this.f52849p = str2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0732b(this.f52847i, this.f52848o, this.f52849p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f52845d == 0) {
                kotlin.c.b(obj);
                try {
                    File parentFile = b.this.f52841a.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    String str = this.f52847i.name() + "," + b.this.f52842b.format(new Date()) + "," + this.f52848o + "," + this.f52849p;
                    FileWriter fileWriter = new FileWriter(b.this.f52841a, true);
                    Writer append = fileWriter.append((CharSequence) str);
                    ur.c.a(fileWriter, null);
                    return append;
                } catch (Exception unused) {
                    return Unit.f33074a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0732b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52850d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f52850d == 0) {
                kotlin.c.b(obj);
                try {
                    return kotlin.coroutines.jvm.internal.b.a(b.this.f52841a.delete());
                } catch (Exception unused) {
                    return Unit.f33074a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52852d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f52853e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f52854i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f52855o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ wo.a f52856p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, b bVar, String str2, wo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f52853e = str;
            this.f52854i = bVar;
            this.f52855o = str2;
            this.f52856p = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f52853e, this.f52854i, this.f52855o, this.f52856p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f52852d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                String J = StringsKt.J(this.f52853e, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null);
                b bVar = this.f52854i;
                String str = this.f52855o;
                wo.a aVar = this.f52856p;
                this.f52852d = 1;
                if (bVar.a(str, aVar, J, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52857d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f52859i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ wo.a f52860o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, wo.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f52859i = str;
            this.f52860o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, wo.a aVar, StringBuilder sb2, String str2) {
            List split$default = StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null);
            String str3 = (String) split$default.get(0);
            if (Intrinsics.areEqual((String) split$default.get(2), str) && Intrinsics.areEqual(str3, aVar.name())) {
                sb2.append(str2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            return Unit.f33074a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f52859i, this.f52860o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f52857d == 0) {
                kotlin.c.b(obj);
                try {
                    if (!b.this.f52841a.exists()) {
                        return null;
                    }
                    final StringBuilder sb2 = new StringBuilder();
                    File file = b.this.f52841a;
                    final String str = this.f52859i;
                    final wo.a aVar = this.f52860o;
                    j.f(file, null, new Function1() { // from class: wo.c
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f52841a = new File(context.getCacheDir(), "persona_log.csv");
        this.f52842b = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault());
        this.f52843c = i.a(m0.a().Z0(z.b(null, 1, null)));
        this.f52844d = CoroutineDispatcher.c2(m0.b(), 1, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object a(String str, wo.a aVar, String str2, Continuation continuation) {
        Object g10 = hs.g.g(this.f52844d, new C0732b(aVar, str, str2, null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    public final Object e(Continuation continuation) {
        Object g10 = hs.g.g(this.f52844d, new c(null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    public final void f(String subsystem, wo.a level, String message) {
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        Intrinsics.checkNotNullParameter(level, "level");
        Intrinsics.checkNotNullParameter(message, "message");
        hs.g.d(this.f52843c, null, null, new d(message, this, subsystem, level, null), 3, null);
    }

    public final Object g(String str, wo.a aVar, Continuation continuation) {
        return hs.g.g(this.f52844d, new e(str, aVar, null), continuation);
    }
}
