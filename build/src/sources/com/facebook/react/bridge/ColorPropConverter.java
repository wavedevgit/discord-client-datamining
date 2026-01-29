package com.facebook.react.bridge;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.ColorSpace;
import android.os.Build;
import android.util.TypedValue;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0002J!\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0011\u001a\u00020\u0012H\u0002¢\u0006\u0002\u0010\u0013J\u001c\u0010\u0014\u001a\u0004\u0018\u00010\u00152\b\u0010\u0010\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0011\u001a\u00020\u0012H\u0007J!\u0010\u0016\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0011\u001a\u00020\u0012H\u0007¢\u0006\u0002\u0010\u0013J\"\u0010\u0016\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0017\u001a\u00020\u000fH\u0007J!\u0010\u0018\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\b\u0010\u0019\u001a\u0004\u0018\u00010\u0007H\u0007¢\u0006\u0002\u0010\u001aJ\u0018\u0010\u001b\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0019\u001a\u00020\u0007H\u0002J\u0018\u0010\u001c\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0019\u001a\u00020\u0007H\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/facebook/react/bridge/ColorPropConverter;", "", "<init>", "()V", "supportWideGamut", "", "JSON_KEY", "", "PREFIX_RESOURCE", "PREFIX_ATTR", "PACKAGE_DELIMITER", "PATH_DELIMITER", "ATTR", "ATTR_SEGMENT", "getColorInteger", "", "value", "context", "Landroid/content/Context;", "(Ljava/lang/Object;Landroid/content/Context;)Ljava/lang/Integer;", "getColorInstance", "Landroid/graphics/Color;", "getColor", "defaultInt", "resolveResourcePath", "resourcePath", "(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/Integer;", "resolveResource", "resolveThemeAttribute", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ColorPropConverter {
    @NotNull
    private static final String ATTR = "attr";
    @NotNull
    private static final String ATTR_SEGMENT = "attr/";
    @NotNull
    public static final ColorPropConverter INSTANCE = new ColorPropConverter();
    @NotNull
    private static final String JSON_KEY = "resource_paths";
    @NotNull
    private static final String PACKAGE_DELIMITER = ":";
    @NotNull
    private static final String PATH_DELIMITER = "/";
    @NotNull
    private static final String PREFIX_ATTR = "?";
    @NotNull
    private static final String PREFIX_RESOURCE = "@";

    private ColorPropConverter() {
    }

    public static final Integer getColor(Object obj, @NotNull Context context) {
        Color colorInstance;
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            if (INSTANCE.supportWideGamut() && (colorInstance = getColorInstance(obj, context)) != null) {
                return Integer.valueOf(colorInstance.toArgb());
            }
        } catch (JSApplicationCausedNativeException e10) {
            p8.a.M(ReactConstants.TAG, e10, "Error extracting color from WideGamut", new Object[0]);
        }
        return INSTANCE.getColorInteger(obj, context);
    }

    public static final Color getColorInstance(Object obj, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (obj == null) {
            return null;
        }
        ColorPropConverter colorPropConverter = INSTANCE;
        if (colorPropConverter.supportWideGamut() && (obj instanceof Double)) {
            return Color.valueOf((int) ((Number) obj).doubleValue());
        }
        if (obj instanceof ReadableMap) {
            if (colorPropConverter.supportWideGamut()) {
                ReadableMap readableMap = (ReadableMap) obj;
                if (readableMap.hasKey("space")) {
                    ColorSpace colorSpace = ColorSpace.get(Intrinsics.areEqual(readableMap.getString("space"), "display-p3") ? ColorSpace.Named.DISPLAY_P3 : ColorSpace.Named.SRGB);
                    Intrinsics.checkNotNullExpressionValue(colorSpace, "get(...)");
                    return Color.valueOf(Color.pack((float) readableMap.getDouble("r"), (float) readableMap.getDouble("g"), (float) readableMap.getDouble("b"), (float) readableMap.getDouble("a"), colorSpace));
                }
            }
            ReadableArray array = ((ReadableMap) obj).getArray(JSON_KEY);
            if (array != null) {
                int size = array.size();
                for (int i10 = 0; i10 < size; i10++) {
                    Integer resolveResourcePath = resolveResourcePath(context, array.getString(i10));
                    if (INSTANCE.supportWideGamut() && resolveResourcePath != null) {
                        return Color.valueOf(resolveResourcePath.intValue());
                    }
                }
                throw new JSApplicationCausedNativeException("ColorValue: None of the paths in the `resource_paths` array resolved to a color resource.");
            }
            throw new JSApplicationCausedNativeException("ColorValue: The `resource_paths` must be an array of color resource path strings.");
        }
        throw new JSApplicationCausedNativeException("ColorValue: the value must be a number or Object.");
    }

    private final Integer getColorInteger(Object obj, Context context) {
        if (obj == null) {
            return null;
        }
        if (obj instanceof Double) {
            return Integer.valueOf((int) ((Number) obj).doubleValue());
        }
        if (context != null) {
            if (obj instanceof ReadableMap) {
                ReadableMap readableMap = (ReadableMap) obj;
                if (readableMap.hasKey("space")) {
                    float f10 = (float) readableMap.getDouble("r");
                    float f11 = (float) SetSpanOperation.SPAN_MAX_PRIORITY;
                    return Integer.valueOf(Color.argb((int) (((float) readableMap.getDouble("a")) * f11), (int) (f10 * f11), (int) (((float) readableMap.getDouble("g")) * f11), (int) (((float) readableMap.getDouble("b")) * f11)));
                }
                ReadableArray array = readableMap.getArray(JSON_KEY);
                if (array != null) {
                    int size = array.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        Integer resolveResourcePath = resolveResourcePath(context, array.getString(i10));
                        if (resolveResourcePath != null) {
                            return resolveResourcePath;
                        }
                    }
                    throw new JSApplicationCausedNativeException("ColorValue: None of the paths in the `resource_paths` array resolved to a color resource.");
                }
                throw new JSApplicationCausedNativeException("ColorValue: The `resource_paths` must be an array of color resource path strings.");
            }
            throw new JSApplicationCausedNativeException("ColorValue: the value must be a number or Object.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final int resolveResource(Context context, String str) {
        String str2;
        List split$default = StringsKt.split$default(str, new String[]{PACKAGE_DELIMITER}, false, 0, 6, null);
        String packageName = context.getPackageName();
        if (split$default.size() > 1) {
            packageName = (String) split$default.get(0);
            str2 = (String) split$default.get(1);
        } else {
            str2 = str;
        }
        List split$default2 = StringsKt.split$default(str2, new String[]{PATH_DELIMITER}, false, 0, 6, null);
        String str3 = (String) split$default2.get(1);
        return q1.j.d(context.getResources(), context.getResources().getIdentifier(str3, (String) split$default2.get(0), packageName), context.getTheme());
    }

    public static final Integer resolveResourcePath(@NotNull Context context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (str != null && str.length() != 0) {
            boolean P = StringsKt.P(str, PREFIX_RESOURCE, false, 2, null);
            boolean P2 = StringsKt.P(str, PREFIX_ATTR, false, 2, null);
            String substring = str.substring(1);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            try {
                if (P) {
                    return Integer.valueOf(INSTANCE.resolveResource(context, substring));
                }
                if (P2) {
                    return Integer.valueOf(INSTANCE.resolveThemeAttribute(context, substring));
                }
            } catch (Resources.NotFoundException unused) {
            }
        }
        return null;
    }

    private final int resolveThemeAttribute(Context context, String str) {
        String J = StringsKt.J(str, ATTR_SEGMENT, "", false, 4, null);
        List split$default = StringsKt.split$default(J, new String[]{PACKAGE_DELIMITER}, false, 0, 6, null);
        String packageName = context.getPackageName();
        if (split$default.size() > 1) {
            packageName = (String) split$default.get(0);
            J = (String) split$default.get(1);
        }
        int identifier = context.getResources().getIdentifier(J, ATTR, packageName);
        if (identifier == 0) {
            identifier = context.getResources().getIdentifier(J, ATTR, "android");
        }
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(identifier, typedValue, true)) {
            return typedValue.data;
        }
        throw new Resources.NotFoundException();
    }

    private final boolean supportWideGamut() {
        if (Build.VERSION.SDK_INT >= 26) {
            return true;
        }
        return false;
    }

    public static final int getColor(Object obj, @NotNull Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            Integer color = getColor(obj, context);
            return color != null ? color.intValue() : i10;
        } catch (JSApplicationCausedNativeException e10) {
            p8.a.M(ReactConstants.TAG, e10, "Error converting ColorValue", new Object[0]);
            return i10;
        }
    }
}
