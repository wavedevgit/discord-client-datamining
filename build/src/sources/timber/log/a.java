package timber.log;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Arrays;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49593a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final ArrayList f49594b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private static volatile c[] f49595c = new c[0];

    /* renamed from: timber.log.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class C0639a extends c {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends c {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void c(c tree) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tree, "tree");
            if (tree != this) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                synchronized (a.f49594b) {
                    a.f49594b.add(tree);
                    Object[] array = a.f49594b.toArray(new c[0]);
                    if (array != null) {
                        a.f49595c = (c[]) array;
                        Unit unit = Unit.f33282a;
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.Array<T>");
                    }
                }
                return;
            }
            throw new IllegalArgumentException("Cannot plant Timber into itself.");
        }

        @Override // timber.log.a.c
        public void d(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.d(str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void e(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.e(str, Arrays.copyOf(args, args.length));
            }
        }

        public final c f(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            c[] cVarArr = a.f49595c;
            int length = cVarArr.length;
            int i10 = 0;
            while (i10 < length) {
                c cVar = cVarArr[i10];
                i10++;
                cVar.getExplicitTag$timber_release().set(tag);
            }
            return this;
        }

        @Override // timber.log.a.c
        public void i(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.i(str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void log(int i10, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.log(i10, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void v(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.v(str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void w(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.w(str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void wtf(String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.wtf(str, Arrays.copyOf(args, args.length));
            }
        }

        private b() {
        }

        @Override // timber.log.a.c
        public void d(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.d(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void e(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.e(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void i(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.i(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void log(int i10, Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.log(i10, th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void v(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.v(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void w(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.w(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void wtf(Throwable th2, String str, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            for (c cVar : a.f49595c) {
                cVar.wtf(th2, str, Arrays.copyOf(args, args.length));
            }
        }

        @Override // timber.log.a.c
        public void d(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.d(th2);
            }
        }

        @Override // timber.log.a.c
        public void e(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.e(th2);
            }
        }

        @Override // timber.log.a.c
        public void i(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.i(th2);
            }
        }

        @Override // timber.log.a.c
        public void log(int i10, Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.log(i10, th2);
            }
        }

        @Override // timber.log.a.c
        public void v(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.v(th2);
            }
        }

        @Override // timber.log.a.c
        public void w(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.w(th2);
            }
        }

        @Override // timber.log.a.c
        public void wtf(Throwable th2) {
            for (c cVar : a.f49595c) {
                cVar.wtf(th2);
            }
        }

        @Override // timber.log.a.c
        protected void log(int i10, String str, String message, Throwable th2) {
            Intrinsics.checkNotNullParameter(message, "message");
            throw new AssertionError();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c {
        @NotNull
        private final ThreadLocal<String> explicitTag = new ThreadLocal<>();

        private final String a(Throwable th2) {
            StringWriter stringWriter = new StringWriter(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
            PrintWriter printWriter = new PrintWriter((Writer) stringWriter, false);
            th2.printStackTrace(printWriter);
            printWriter.flush();
            String stringWriter2 = stringWriter.toString();
            Intrinsics.checkNotNullExpressionValue(stringWriter2, "sw.toString()");
            return stringWriter2;
        }

        private final void b(int i10, Throwable th2, String str, Object... objArr) {
            boolean z10;
            String tag$timber_release = getTag$timber_release();
            if (isLoggable(tag$timber_release, i10)) {
                if (str != null && str.length() != 0) {
                    if (objArr.length == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!z10) {
                        str = formatMessage(str, objArr);
                    }
                    if (th2 != null) {
                        str = ((Object) str) + '\n' + a(th2);
                    }
                } else if (th2 == null) {
                    return;
                } else {
                    str = a(th2);
                }
                log(i10, tag$timber_release, str, th2);
            }
        }

        public void d(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(3, null, str, Arrays.copyOf(args, args.length));
        }

        public void e(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(6, null, str, Arrays.copyOf(args, args.length));
        }

        @NotNull
        protected String formatMessage(@NotNull String message, @NotNull Object[] args) {
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(args, "args");
            Object[] copyOf = Arrays.copyOf(args, args.length);
            String format = String.format(message, Arrays.copyOf(copyOf, copyOf.length));
            Intrinsics.checkNotNullExpressionValue(format, "java.lang.String.format(this, *args)");
            return format;
        }

        public final /* synthetic */ ThreadLocal getExplicitTag$timber_release() {
            return this.explicitTag;
        }

        public /* synthetic */ String getTag$timber_release() {
            String str = this.explicitTag.get();
            if (str != null) {
                this.explicitTag.remove();
            }
            return str;
        }

        public void i(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(4, null, str, Arrays.copyOf(args, args.length));
        }

        @ir.c
        protected boolean isLoggable(int i10) {
            return true;
        }

        protected abstract void log(int i10, String str, String str2, Throwable th2);

        public void log(int i10, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(i10, null, str, Arrays.copyOf(args, args.length));
        }

        public void v(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(2, null, str, Arrays.copyOf(args, args.length));
        }

        public void w(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(5, null, str, Arrays.copyOf(args, args.length));
        }

        public void wtf(String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(7, null, str, Arrays.copyOf(args, args.length));
        }

        public void d(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(3, th2, str, Arrays.copyOf(args, args.length));
        }

        public void e(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(6, th2, str, Arrays.copyOf(args, args.length));
        }

        public void i(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(4, th2, str, Arrays.copyOf(args, args.length));
        }

        protected boolean isLoggable(String str, int i10) {
            return isLoggable(i10);
        }

        public void log(int i10, Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(i10, th2, str, Arrays.copyOf(args, args.length));
        }

        public void v(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(2, th2, str, Arrays.copyOf(args, args.length));
        }

        public void w(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(5, th2, str, Arrays.copyOf(args, args.length));
        }

        public void wtf(Throwable th2, String str, @NotNull Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            b(7, th2, str, Arrays.copyOf(args, args.length));
        }

        public void d(Throwable th2) {
            b(3, th2, null, new Object[0]);
        }

        public void e(Throwable th2) {
            b(6, th2, null, new Object[0]);
        }

        public void i(Throwable th2) {
            b(4, th2, null, new Object[0]);
        }

        public void log(int i10, Throwable th2) {
            b(i10, th2, null, new Object[0]);
        }

        public void v(Throwable th2) {
            b(2, th2, null, new Object[0]);
        }

        public void w(Throwable th2) {
            b(5, th2, null, new Object[0]);
        }

        public void wtf(Throwable th2) {
            b(7, th2, null, new Object[0]);
        }
    }
}
