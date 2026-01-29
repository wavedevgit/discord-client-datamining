package io.sentry.react;

import com.facebook.react.bridge.ReadableMap;
import io.sentry.Breadcrumb;
import io.sentry.SentryLevel;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static Breadcrumb a(ReadableMap readableMap) {
        Breadcrumb breadcrumb = new Breadcrumb();
        if (readableMap.hasKey("message")) {
            breadcrumb.C(readableMap.getString("message"));
        }
        if (readableMap.hasKey("type")) {
            breadcrumb.E(readableMap.getString("type"));
        }
        if (readableMap.hasKey("category")) {
            breadcrumb.z(readableMap.getString("category"));
        }
        if (readableMap.hasKey("origin")) {
            breadcrumb.D(readableMap.getString("origin"));
        } else {
            breadcrumb.D("react-native");
        }
        if (readableMap.hasKey("level")) {
            String string = readableMap.getString("level");
            switch (string.hashCode()) {
                case 3237038:
                    string.equals("info");
                    breadcrumb.B(SentryLevel.INFO);
                    break;
                case 95458899:
                    if (string.equals("debug")) {
                        breadcrumb.B(SentryLevel.DEBUG);
                        break;
                    }
                    breadcrumb.B(SentryLevel.INFO);
                    break;
                case 96784904:
                    if (string.equals("error")) {
                        breadcrumb.B(SentryLevel.ERROR);
                        break;
                    }
                    breadcrumb.B(SentryLevel.INFO);
                    break;
                case 97203460:
                    if (string.equals("fatal")) {
                        breadcrumb.B(SentryLevel.FATAL);
                        break;
                    }
                    breadcrumb.B(SentryLevel.INFO);
                    break;
                case 1124446108:
                    if (string.equals("warning")) {
                        breadcrumb.B(SentryLevel.WARNING);
                        break;
                    }
                    breadcrumb.B(SentryLevel.INFO);
                    break;
                default:
                    breadcrumb.B(SentryLevel.INFO);
                    break;
            }
        }
        if (readableMap.hasKey("data")) {
            for (Map.Entry<String, Object> entry : readableMap.getMap("data").toHashMap().entrySet()) {
                if (entry.getValue() != null) {
                    breadcrumb.A(entry.getKey(), entry.getValue());
                }
            }
        }
        return breadcrumb;
    }

    public static String b(ReadableMap readableMap) {
        String str;
        ReadableMap readableMap2;
        if (readableMap.hasKey("category")) {
            str = readableMap.getString("category");
        } else {
            str = null;
        }
        if (str != null && "navigation".equals(str)) {
            if (readableMap.hasKey("data")) {
                readableMap2 = readableMap.getMap("data");
            } else {
                readableMap2 = null;
            }
            if (readableMap2 == null) {
                return null;
            }
            try {
                if (readableMap2.hasKey("to")) {
                    return readableMap2.getString("to");
                }
            } catch (Throwable unused) {
            }
        }
        return null;
    }
}
