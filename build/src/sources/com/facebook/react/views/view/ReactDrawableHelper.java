package com.facebook.react.views.view;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.RoundRectShape;
import android.util.TypedValue;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u0018\u0010\f\u001a\u00020\r2\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\u000fH\u0003J\u0012\u0010\u0010\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\tH\u0002J\u0018\u0010\u0011\u001a\u00020\u00122\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0002J\u001c\u0010\u0013\u001a\u0004\u0018\u00010\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0007H\u0002J\u0018\u0010\u0015\u001a\u00020\r2\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0002J\u0012\u0010\u0016\u001a\u0004\u0018\u00010\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/facebook/react/views/view/ReactDrawableHelper;", "", "<init>", "()V", "resolveOutValue", "Landroid/util/TypedValue;", "createDrawableFromJSDescription", "Landroid/graphics/drawable/Drawable;", "context", "Landroid/content/Context;", "drawableDescriptionDict", "Lcom/facebook/react/bridge/ReadableMap;", "getAttrId", "", "attr", "", "getDefaultThemeDrawable", "getRippleDrawable", "Landroid/graphics/drawable/RippleDrawable;", "setRadius", "drawable", "getColor", "getMask", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactDrawableHelper {
    @NotNull
    public static final ReactDrawableHelper INSTANCE = new ReactDrawableHelper();
    @NotNull
    private static final TypedValue resolveOutValue = new TypedValue();

    private ReactDrawableHelper() {
    }

    public static final Drawable createDrawableFromJSDescription(@NotNull Context context, @NotNull ReadableMap drawableDescriptionDict) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(drawableDescriptionDict, "drawableDescriptionDict");
        String string = drawableDescriptionDict.getString("type");
        if (Intrinsics.areEqual("ThemeAttrAndroid", string)) {
            String string2 = drawableDescriptionDict.getString("attribute");
            if (string2 != null) {
                ReactDrawableHelper reactDrawableHelper = INSTANCE;
                int attrId = reactDrawableHelper.getAttrId(context, string2);
                if (context.getTheme().resolveAttribute(attrId, resolveOutValue, true)) {
                    return reactDrawableHelper.setRadius(drawableDescriptionDict, reactDrawableHelper.getDefaultThemeDrawable(context));
                }
                throw new JSApplicationIllegalArgumentException("Attribute " + string2 + " with id " + attrId + " couldn't be resolved into a drawable");
            }
            throw new JSApplicationIllegalArgumentException("JS description missing 'attribute' field");
        } else if (Intrinsics.areEqual("RippleAndroid", string)) {
            ReactDrawableHelper reactDrawableHelper2 = INSTANCE;
            return reactDrawableHelper2.setRadius(drawableDescriptionDict, reactDrawableHelper2.getRippleDrawable(context, drawableDescriptionDict));
        } else {
            throw new JSApplicationIllegalArgumentException("Invalid type for android drawable: " + string);
        }
    }

    @SuppressLint({"DiscouragedApi", "InternalInsetResource"})
    private final int getAttrId(Context context, String str) {
        if (Intrinsics.areEqual("selectableItemBackground", str)) {
            return 16843534;
        }
        if (Intrinsics.areEqual("selectableItemBackgroundBorderless", str)) {
            return 16843868;
        }
        return context.getResources().getIdentifier(str, "attr", "android");
    }

    private final int getColor(Context context, ReadableMap readableMap) {
        if (readableMap.hasKey(ViewProps.COLOR) && !readableMap.isNull(ViewProps.COLOR)) {
            return readableMap.getInt(ViewProps.COLOR);
        }
        Resources.Theme theme = context.getTheme();
        TypedValue typedValue = resolveOutValue;
        if (theme.resolveAttribute(16843820, typedValue, true)) {
            return context.getResources().getColor(typedValue.resourceId, context.getTheme());
        }
        throw new JSApplicationIllegalArgumentException("Attribute colorControlHighlight couldn't be resolved into a drawable");
    }

    private final Drawable getDefaultThemeDrawable(Context context) {
        return context.getResources().getDrawable(resolveOutValue.resourceId, context.getTheme());
    }

    private final Drawable getMask(ReadableMap readableMap) {
        if (readableMap.hasKey("borderless") && readableMap.getBoolean("borderless")) {
            return null;
        }
        if (readableMap.hasKey("rippleCornerRadius")) {
            float pixelFromDIP = PixelUtil.toPixelFromDIP(readableMap.getDouble("rippleCornerRadius"));
            float[] fArr = new float[8];
            for (int i10 = 0; i10 < 8; i10++) {
                fArr[i10] = pixelFromDIP;
            }
            return new ShapeDrawable(new RoundRectShape(fArr, null, null));
        } else if (readableMap.hasKey("borderless") && !readableMap.isNull("borderless") && readableMap.getBoolean("borderless")) {
            return null;
        } else {
            return new ColorDrawable(-1);
        }
    }

    private final RippleDrawable getRippleDrawable(Context context, ReadableMap readableMap) {
        int color = getColor(context, readableMap);
        return new RippleDrawable(new ColorStateList(new int[][]{new int[0]}, new int[]{color}), null, getMask(readableMap));
    }

    private final Drawable setRadius(ReadableMap readableMap, Drawable drawable) {
        if (readableMap.hasKey("rippleRadius") && (drawable instanceof RippleDrawable)) {
            ((RippleDrawable) drawable).setRadius((int) PixelUtil.toPixelFromDIP(readableMap.getDouble("rippleRadius")));
        }
        return drawable;
    }
}
