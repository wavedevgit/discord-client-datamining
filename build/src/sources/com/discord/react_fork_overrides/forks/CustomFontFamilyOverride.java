package com.discord.react_fork_overrides.forks;

import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
import android.os.Build;
import androidx.arch.core.util.Function;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.text.CreateTypefaceObject;
import com.facebook.react.views.text.ReactFontManager;
import java.util.ArrayList;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import r1.j;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\t\u001a\u00020\nJ\"\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0002J+\u0010\u0012\u001a\u00020\f2\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0003¢\u0006\u0002\u0010\u0014R\u0016\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0007R\u000e\u0010\b\u001a\u00020\u0006X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/react_fork_overrides/forks/CustomFontFamilyOverride;", "", "<init>", "()V", "FILE_EXTENSIONS", "", "", "[Ljava/lang/String;", "FONTS_ASSET_PATH", "override", "", "createAssetTypeface", "Landroid/graphics/Typeface;", "fontFamilyName", "style", "", "assetManager", "Landroid/content/res/AssetManager;", "createAssetTypefaceWithFallbacks", "fontFamilyNames", "([Ljava/lang/String;ILandroid/content/res/AssetManager;)Landroid/graphics/Typeface;", "react_fork_overrides_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCustomFontFamilyOverride.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CustomFontFamilyOverride.kt\ncom/discord/react_fork_overrides/forks/CustomFontFamilyOverride\n+ 2 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,157:1\n37#2:158\n36#2,3:159\n*S KotlinDebug\n*F\n+ 1 CustomFontFamilyOverride.kt\ncom/discord/react_fork_overrides/forks/CustomFontFamilyOverride\n*L\n36#1:158\n36#1:159,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CustomFontFamilyOverride {
    @NotNull
    private static final String FONTS_ASSET_PATH = "fonts/";
    @NotNull
    public static final CustomFontFamilyOverride INSTANCE = new CustomFontFamilyOverride();
    @NotNull
    private static final String[] FILE_EXTENSIONS = {".ttf", ".otf"};

    private CustomFontFamilyOverride() {
    }

    private final Typeface createAssetTypeface(String str, int i10, AssetManager assetManager) {
        if (str == null) {
            str = "";
        }
        String str2 = str;
        String[] strArr = (String[]) StringsKt.split$default(str2, new String[]{","}, false, 0, 6, null).toArray(new String[0]);
        int length = strArr.length;
        for (int i11 = 0; i11 < length; i11++) {
            strArr[i11] = StringsKt.k1(strArr[i11]).toString();
        }
        if (strArr.length > 1) {
            if (Build.VERSION.SDK_INT >= 29) {
                return createAssetTypefaceWithFallbacks(strArr, i10, assetManager);
            }
            str2 = strArr[0];
        }
        if (strArr.length > 1 && Build.VERSION.SDK_INT < 29) {
            if ((i10 & 2) != 0) {
                str2 = StringsKt.H(StringsKt.H(StringsKt.H(StringsKt.H(StringsKt.H(str2, ReactProgressBarViewManager.DEFAULT_STYLE, "NormalItalic", true), "Medium", "MediumItalic", true), "Semibold", "SemiboldItalic", true), "Bold", "BoldItalic", true), "ExtraBold", "ExtraBoldItalic", true);
            }
            if ((i10 & 1) != 0) {
                str2 = StringsKt.H(StringsKt.H(StringsKt.H(str2, ReactProgressBarViewManager.DEFAULT_STYLE, "Bold", true), "Medium", "Bold", true), "Semibold", "Bold", true);
            }
            str2 = StringsKt.H(StringsKt.H(str2, "ItalicItalic", "Italic", true), "BoldBold", "Bold", true);
        }
        for (String str3 : FILE_EXTENSIONS) {
            String str4 = FONTS_ASSET_PATH + str2 + str3;
            Intrinsics.checkNotNullExpressionValue(str4, "toString(...)");
            try {
                Typeface createFromAsset = Typeface.createFromAsset(assetManager, str4);
                Intrinsics.checkNotNull(createFromAsset);
                return createFromAsset;
            } catch (RuntimeException unused) {
            }
        }
        Typeface create = Typeface.create(str2, i10);
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        return create;
    }

    private final Typeface createAssetTypefaceWithFallbacks(String[] strArr, int i10, AssetManager assetManager) {
        int i11;
        int i12;
        ArrayList arrayList = new ArrayList();
        int length = strArr.length;
        boolean z10 = false;
        for (int i13 = 0; i13 < length; i13++) {
            String str = strArr[i13];
            if ((i10 & 2) != 0) {
                str = StringsKt.H(StringsKt.H(StringsKt.H(StringsKt.H(StringsKt.H(str, ReactProgressBarViewManager.DEFAULT_STYLE, "NormalItalic", true), "Medium", "MediumItalic", true), "Semibold", "SemiboldItalic", true), "Bold", "BoldItalic", true), "ExtraBold", "ExtraBoldItalic", true);
            }
            if ((i10 & 1) != 0) {
                str = StringsKt.H(StringsKt.H(StringsKt.H(str, ReactProgressBarViewManager.DEFAULT_STYLE, "Bold", true), "Medium", "Bold", true), "Semibold", "Bold", true);
            }
            String H = StringsKt.H(StringsKt.H(str, "ItalicItalic", "Italic", true), "BoldBold", "Bold", true);
            for (String str2 : FILE_EXTENSIONS) {
                String str3 = FONTS_ASSET_PATH + H + str2;
                Intrinsics.checkNotNullExpressionValue(str3, "toString(...)");
                try {
                    j.a();
                    Font build = a.a(assetManager, str3).build();
                    Intrinsics.checkNotNullExpressionValue(build, "build(...)");
                    r1.i.a();
                    FontFamily build2 = r1.g.a(build).build();
                    Intrinsics.checkNotNullExpressionValue(build2, "build(...)");
                    arrayList.add(build2);
                } catch (Throwable unused) {
                }
            }
        }
        if (arrayList.size() == 0) {
            return createAssetTypeface(strArr[0], i10, assetManager);
        }
        c.a();
        Typeface.CustomFallbackBuilder a10 = r1.h.a(e.a(arrayList.get(0)));
        int size = arrayList.size();
        for (int i14 = 1; i14 < size; i14++) {
            a10.addCustomFallback(e.a(arrayList.get(i14)));
        }
        String str4 = strArr[0];
        Locale ROOT = Locale.ROOT;
        Intrinsics.checkNotNullExpressionValue(ROOT, "ROOT");
        String lowerCase = str4.toLowerCase(ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        if (StringsKt.i0(lowerCase, Fonts.Font.STYLE_ITALIC, 0, false, 6, null) > -1) {
            i11 = 1;
        } else {
            i11 = 0;
        }
        String str5 = strArr[0];
        Intrinsics.checkNotNullExpressionValue(ROOT, "ROOT");
        String lowerCase2 = str5.toLowerCase(ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
        if (StringsKt.i0(lowerCase2, "bold", 0, false, 6, null) > -1) {
            z10 = true;
        }
        d.a();
        if (z10) {
            i12 = ReactFontManager.TypefaceStyle.BOLD;
        } else {
            i12 = ReactFontManager.TypefaceStyle.NORMAL;
        }
        a10.setStyle(b.a(i12, i11));
        Typeface build3 = a10.build();
        Intrinsics.checkNotNullExpressionValue(build3, "build(...)");
        return build3;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Typeface override$lambda$0(CreateTypefaceObject createTypefaceObject) {
        return INSTANCE.createAssetTypeface(createTypefaceObject.getFontFamilyName(), createTypefaceObject.getStyle(), createTypefaceObject.getAssetManager());
    }

    public final void override() {
        ReactFontManager.Companion.setCreateAssetTypefaceOverride(new Function() { // from class: com.discord.react_fork_overrides.forks.f
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                Typeface override$lambda$0;
                override$lambda$0 = CustomFontFamilyOverride.override$lambda$0((CreateTypefaceObject) obj);
                return override$lambda$0;
            }
        });
    }
}
