package ul;

import android.media.MediaFormat;
import android.os.Build;
import kotlin.Result;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51468a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Number a(MediaFormat format, Number defaultValue) {
            Intrinsics.checkNotNullParameter(format, "format");
            Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
            Number c10 = c(format, "channel-count");
            if (c10 == null) {
                return defaultValue;
            }
            return c10;
        }

        public final Number b(MediaFormat format, Number defaultValue) {
            Intrinsics.checkNotNullParameter(format, "format");
            Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
            Number c10 = c(format, "frame-rate");
            if (c10 == null) {
                return defaultValue;
            }
            return c10;
        }

        public final Number c(MediaFormat format, String key) {
            Object b10;
            Object b11;
            Intrinsics.checkNotNullParameter(format, "format");
            Intrinsics.checkNotNullParameter(key, "key");
            Number number = null;
            if (!format.containsKey(key)) {
                return null;
            }
            if (Build.VERSION.SDK_INT >= 29) {
                return format.getNumber(key);
            }
            try {
                Result.a aVar = Result.f31985e;
                b10 = Result.b(Integer.valueOf(format.getInteger(key)));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f31985e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            if (Result.e(b10) != null) {
                try {
                    b11 = Result.b(Float.valueOf(format.getFloat(key)));
                } catch (Throwable th3) {
                    Result.a aVar3 = Result.f31985e;
                    b11 = Result.b(kotlin.c.a(th3));
                }
                b10 = b11;
            }
            if (!Result.g(b10)) {
                number = b10;
            }
            return number;
        }

        public final Number d(MediaFormat format, Number defaultValue) {
            Intrinsics.checkNotNullParameter(format, "format");
            Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
            Number c10 = c(format, "sample-rate");
            if (c10 == null) {
                return defaultValue;
            }
            return c10;
        }

        private a() {
        }
    }

    public static final Number a(MediaFormat mediaFormat, Number number) {
        return f51468a.b(mediaFormat, number);
    }

    public static final Number b(MediaFormat mediaFormat, String str) {
        return f51468a.c(mediaFormat, str);
    }
}
