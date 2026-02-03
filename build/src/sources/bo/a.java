package bo;

import android.content.Context;
import com.withpersona.sdk2.inquiry.BuildConfig;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import kotlin.Unit;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import wr.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: b  reason: collision with root package name */
    public static final C0106a f6644b = new C0106a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final Charset f6645c = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final File f6646a;

    /* renamed from: bo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0106a {
        public /* synthetic */ C0106a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0106a() {
        }
    }

    public a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f6646a = new File(new File(context.getFilesDir(), ".com.withpersona.sdk2.inquiry"), "errors");
    }

    private final String b(Throwable th2) {
        while (th2 != null) {
            StackTraceElement[] stackTrace = th2.getStackTrace();
            Intrinsics.checkNotNullExpressionValue(stackTrace, "getStackTrace(...)");
            for (StackTraceElement stackTraceElement : stackTrace) {
                String className = stackTraceElement.getClassName();
                Intrinsics.checkNotNullExpressionValue(className, "getClassName(...)");
                if (StringsKt.P(className, BuildConfig.LIBRARY_PACKAGE_NAME, false, 2, null)) {
                    return stackTraceElement.getClassName() + " in " + stackTraceElement.getMethodName() + " at line " + stackTraceElement.getLineNumber();
                }
            }
            th2 = th2.getCause();
        }
        return null;
    }

    private final String c(Throwable th2) {
        StackTraceElement[] stackTrace = th2.getStackTrace();
        Intrinsics.checkNotNullExpressionValue(stackTrace, "getStackTrace(...)");
        StackTraceElement stackTraceElement = (StackTraceElement) i.V(stackTrace);
        if (stackTraceElement != null) {
            String className = stackTraceElement.getClassName();
            String methodName = stackTraceElement.getMethodName();
            int lineNumber = stackTraceElement.getLineNumber();
            return className + " in " + methodName + " at line " + lineNumber;
        }
        return null;
    }

    private final File d() {
        return new File(this.f6646a, "last_error.txt");
    }

    private final void h(File file) {
        if (file.exists()) {
            if (file.isDirectory()) {
                return;
            }
            file.delete();
        }
        file.mkdirs();
    }

    private final String i(File file) {
        if (!file.exists() || !file.isFile()) {
            return null;
        }
        byte[] bArr = new byte[8192];
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        FileInputStream fileInputStream = new FileInputStream(file);
        while (true) {
            try {
                int read = fileInputStream.read(bArr);
                if (read > 0) {
                    byteArrayOutputStream.write(bArr, 0, read);
                } else {
                    byte[] byteArray = byteArrayOutputStream.toByteArray();
                    Intrinsics.checkNotNullExpressionValue(byteArray, "toByteArray(...)");
                    Charset UTF_8 = f6645c;
                    Intrinsics.checkNotNullExpressionValue(UTF_8, "UTF_8");
                    String str = new String(byteArray, UTF_8);
                    c.a(fileInputStream, null);
                    return str;
                }
            } finally {
            }
        }
    }

    private final void j(File file, String str) {
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), f6645c);
        try {
            outputStreamWriter.write(str);
            Unit unit = Unit.f32464a;
            c.a(outputStreamWriter, null);
        } finally {
        }
    }

    public final void a() {
        d().delete();
    }

    public final String e() {
        return i(d());
    }

    public final boolean f() {
        return d().exists();
    }

    public final void g(Throwable error) {
        Intrinsics.checkNotNullParameter(error, "error");
        h(this.f6646a);
        File d10 = d();
        if (d10.isDirectory()) {
            d10.delete();
        }
        String canonicalName = error.getClass().getCanonicalName();
        String b10 = b(error);
        if (b10 == null) {
            b10 = c(error);
        }
        j(d10, canonicalName + " in " + b10);
    }
}
