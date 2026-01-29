package com.facebook.react.views.text;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
import android.os.Build;
import android.util.SparseArray;
import androidx.arch.core.util.Function;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.facebook.react.uimanager.ViewProps;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import r1.g;
import r1.h;
import r1.i;
import r1.j;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u0000 \u001e2\u00020\u0001:\u0003\u001e\u001f B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001e\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fJ&\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u000e\u001a\u00020\u000fJ&\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fJ\u001e\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u000e\u001a\u00020\u000fJ\u001e\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\rJ\u0018\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u00062\b\u0010\u001b\u001a\u0004\u0018\u00010\tJ \u0010\u001c\u001a\u00020\u00162\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\b\u0010\u001d\u001a\u0004\u0018\u00010\tR\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\t0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006!"}, d2 = {"Lcom/facebook/react/views/text/ReactFontManager;", "", "<init>", "()V", "mFontCache", "Ljava/util/HashMap;", "", "Lcom/facebook/react/views/text/ReactFontManager$AssetFontFamily;", "mCustomTypefaceCache", "Landroid/graphics/Typeface;", "getTypeface", "fontFamilyName", "style", "", "assetManager", "Landroid/content/res/AssetManager;", "weight", Fonts.Font.STYLE_ITALIC, "", "typefaceStyle", "Lcom/facebook/react/views/text/ReactFontManager$TypefaceStyle;", "addCustomFont", "", "context", "Landroid/content/Context;", ViewProps.FONT_FAMILY, "fontId", "font", "setTypeface", "typeface", "Companion", "TypefaceStyle", "AssetFontFamily", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactFontManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactFontManager.kt\ncom/facebook/react/views/text/ReactFontManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,280:1\n1#2:281\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactFontManager {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String[] EXTENSIONS = {"", "_bold", "_italic", "_bold_italic"};
    @NotNull
    private static final String[] FILE_EXTENSIONS = {".ttf", ".otf"};
    @NotNull
    private static final String FONTS_ASSET_PATH = "fonts/";
    private static Function createAssetTypefaceOverride;
    private static ReactFontManager sReactFontManagerInstance;
    @NotNull
    private final HashMap<String, Typeface> mCustomTypefaceCache;
    @NotNull
    private final HashMap<String, AssetFontFamily> mFontCache;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\b\u0002\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0007\u001a\u0004\u0018\u00010\u00062\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\u0006R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/facebook/react/views/text/ReactFontManager$AssetFontFamily;", "", "<init>", "()V", "mTypefaceSparseArray", "Landroid/util/SparseArray;", "Landroid/graphics/Typeface;", "getTypefaceForStyle", "style", "", "setTypefaceForStyle", "", "typeface", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AssetFontFamily {
        @NotNull
        private final SparseArray<Typeface> mTypefaceSparseArray = new SparseArray<>(4);

        public final Typeface getTypefaceForStyle(int i10) {
            return this.mTypefaceSparseArray.get(i10);
        }

        public final void setTypefaceForStyle(int i10, @NotNull Typeface typeface) {
            Intrinsics.checkNotNullParameter(typeface, "typeface");
            this.mTypefaceSparseArray.put(i10, typeface);
        }
    }

    @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0014\u001a\u00020\u0013H\u0007J \u0010\u0015\u001a\u00020\u00072\u0006\u0010\u0016\u001a\u00020\u000e2\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0002J+\u0010\u001b\u001a\u00020\u00072\f\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u000e0\r2\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0003¢\u0006\u0002\u0010\u001dR(\u0010\u0004\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\t\"\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\rX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000fR\u0016\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000e0\rX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000fR\u000e\u0010\u0011\u001a\u00020\u000eX\u0082T¢\u0006\u0002\n\u0000R\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/facebook/react/views/text/ReactFontManager$Companion;", "", "<init>", "()V", "createAssetTypefaceOverride", "Landroidx/arch/core/util/Function;", "Lcom/facebook/react/views/text/CreateTypefaceObject;", "Landroid/graphics/Typeface;", "getCreateAssetTypefaceOverride", "()Landroidx/arch/core/util/Function;", "setCreateAssetTypefaceOverride", "(Landroidx/arch/core/util/Function;)V", "EXTENSIONS", "", "", "[Ljava/lang/String;", "FILE_EXTENSIONS", "FONTS_ASSET_PATH", "sReactFontManagerInstance", "Lcom/facebook/react/views/text/ReactFontManager;", "getInstance", "createAssetTypeface", "fontFamilyName", "style", "", "assetManager", "Landroid/content/res/AssetManager;", "createAssetTypefaceWithFallbacks", "fontFamilyNames", "([Ljava/lang/String;ILandroid/content/res/AssetManager;)Landroid/graphics/Typeface;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nReactFontManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactFontManager.kt\ncom/facebook/react/views/text/ReactFontManager$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,280:1\n1#2:281\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Typeface createAssetTypeface(String str, int i10, AssetManager assetManager) {
            Function createAssetTypefaceOverride = getCreateAssetTypefaceOverride();
            if (createAssetTypefaceOverride != null) {
                Object apply = createAssetTypefaceOverride.apply(new CreateTypefaceObject(str, i10, assetManager));
                Intrinsics.checkNotNullExpressionValue(apply, "apply(...)");
                return (Typeface) apply;
            }
            String str2 = ReactFontManager.EXTENSIONS[i10];
            for (String str3 : ReactFontManager.FILE_EXTENSIONS) {
                String str4 = ReactFontManager.FONTS_ASSET_PATH + str + str2 + str3;
                Intrinsics.checkNotNullExpressionValue(str4, "toString(...)");
                try {
                    Typeface createFromAsset = Typeface.createFromAsset(assetManager, str4);
                    Intrinsics.checkNotNullExpressionValue(createFromAsset, "createFromAsset(...)");
                    return createFromAsset;
                } catch (RuntimeException unused) {
                }
            }
            Typeface create = Typeface.create(str, i10);
            Intrinsics.checkNotNullExpressionValue(create, "create(...)");
            return create;
        }

        private final Typeface createAssetTypefaceWithFallbacks(String[] strArr, int i10, AssetManager assetManager) {
            ArrayList arrayList = new ArrayList();
            for (String str : strArr) {
                for (String str2 : ReactFontManager.FILE_EXTENSIONS) {
                    String str3 = ReactFontManager.FONTS_ASSET_PATH + str + str2;
                    Intrinsics.checkNotNullExpressionValue(str3, "toString(...)");
                    try {
                        j.a();
                        Font build = com.discord.react_fork_overrides.forks.a.a(assetManager, str3).build();
                        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
                        i.a();
                        FontFamily build2 = g.a(build).build();
                        Intrinsics.checkNotNullExpressionValue(build2, "build(...)");
                        arrayList.add(build2);
                    } catch (IOException | RuntimeException unused) {
                    }
                }
            }
            if (arrayList.isEmpty()) {
                return createAssetTypeface(strArr[0], i10, assetManager);
            }
            com.discord.react_fork_overrides.forks.c.a();
            Typeface.CustomFallbackBuilder a10 = h.a(com.discord.react_fork_overrides.forks.e.a(arrayList.get(0)));
            int size = arrayList.size();
            for (int i11 = 1; i11 < size; i11++) {
                a10.addCustomFallback(com.discord.react_fork_overrides.forks.e.a(arrayList.get(i11)));
            }
            Typeface build3 = a10.build();
            Intrinsics.checkNotNullExpressionValue(build3, "build(...)");
            return build3;
        }

        public final Function getCreateAssetTypefaceOverride() {
            return ReactFontManager.createAssetTypefaceOverride;
        }

        @NotNull
        public final ReactFontManager getInstance() {
            ReactFontManager reactFontManager = ReactFontManager.sReactFontManagerInstance;
            if (reactFontManager == null) {
                ReactFontManager reactFontManager2 = new ReactFontManager(null);
                ReactFontManager.sReactFontManagerInstance = reactFontManager2;
                return reactFontManager2;
            }
            return reactFontManager;
        }

        public final void setCreateAssetTypefaceOverride(Function function) {
            ReactFontManager.createAssetTypefaceOverride = function;
        }

        private Companion() {
        }
    }

    public /* synthetic */ ReactFontManager(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public static final ReactFontManager getInstance() {
        return Companion.getInstance();
    }

    public final void addCustomFont(@NotNull Context context, @NotNull String fontFamily, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontFamily, "fontFamily");
        Typeface i11 = q1.j.i(context, i10);
        if (i11 != null) {
            this.mCustomTypefaceCache.put(fontFamily, i11);
        }
    }

    @NotNull
    public final Typeface getTypeface(@NotNull String fontFamilyName, int i10, @NotNull AssetManager assetManager) {
        Intrinsics.checkNotNullParameter(fontFamilyName, "fontFamilyName");
        Intrinsics.checkNotNullParameter(assetManager, "assetManager");
        return getTypeface(fontFamilyName, new TypefaceStyle(i10), assetManager);
    }

    public final void setTypeface(@NotNull String fontFamilyName, int i10, Typeface typeface) {
        Intrinsics.checkNotNullParameter(fontFamilyName, "fontFamilyName");
        if (typeface != null) {
            AssetFontFamily assetFontFamily = this.mFontCache.get(fontFamilyName);
            if (assetFontFamily == null) {
                assetFontFamily = new AssetFontFamily();
                this.mFontCache.put(fontFamilyName, assetFontFamily);
            }
            assetFontFamily.setTypefaceForStyle(i10, typeface);
        }
    }

    private ReactFontManager() {
        this.mFontCache = new HashMap<>();
        this.mCustomTypefaceCache = new HashMap<>();
    }

    @NotNull
    public final Typeface getTypeface(@NotNull String fontFamilyName, int i10, boolean z10, @NotNull AssetManager assetManager) {
        Intrinsics.checkNotNullParameter(fontFamilyName, "fontFamilyName");
        Intrinsics.checkNotNullParameter(assetManager, "assetManager");
        return getTypeface(fontFamilyName, new TypefaceStyle(i10, z10), assetManager);
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \u00112\u00020\u0001:\u0001\u0011B\u0019\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B\u0011\b\u0016\u0012\u0006\u0010\b\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\tB\u0019\b\u0016\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\nJ\u0006\u0010\r\u001a\u00020\u0003J\u000e\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000fR\u000e\u0010\u000b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/views/text/ReactFontManager$TypefaceStyle;", "", "weight", "", Fonts.Font.STYLE_ITALIC, "", "<init>", "(IZ)V", "style", "(I)V", "(II)V", "mItalic", "mWeight", "getNearestStyle", "apply", "Landroid/graphics/Typeface;", "typeface", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class TypefaceStyle {
        public static final int BOLD = 700;
        @NotNull
        public static final Companion Companion = new Companion(null);
        private static final int MAX_WEIGHT = 1000;
        private static final int MIN_WEIGHT = 1;
        public static final int NORMAL = 400;
        private final boolean mItalic;
        private final int mWeight;

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/facebook/react/views/text/ReactFontManager$TypefaceStyle$Companion;", "", "<init>", "()V", "BOLD", "", "NORMAL", "MIN_WEIGHT", "MAX_WEIGHT", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public TypefaceStyle(int i10, boolean z10) {
            this.mItalic = z10;
            this.mWeight = i10 == -1 ? NORMAL : i10;
        }

        @NotNull
        public final Typeface apply(@NotNull Typeface typeface) {
            Intrinsics.checkNotNullParameter(typeface, "typeface");
            if (Build.VERSION.SDK_INT < 28) {
                Typeface create = Typeface.create(typeface, getNearestStyle());
                Intrinsics.checkNotNull(create);
                return create;
            }
            Typeface create2 = Typeface.create(typeface, this.mWeight, this.mItalic);
            Intrinsics.checkNotNull(create2);
            return create2;
        }

        public final int getNearestStyle() {
            if (this.mWeight < 700) {
                if (this.mItalic) {
                    return 2;
                }
                return 0;
            } else if (this.mItalic) {
                return 3;
            } else {
                return 1;
            }
        }

        public TypefaceStyle(int i10) {
            i10 = i10 == -1 ? 0 : i10;
            this.mItalic = (i10 & 2) != 0;
            this.mWeight = (i10 & 1) != 0 ? BOLD : NORMAL;
        }

        public TypefaceStyle(int i10, int i11) {
            i10 = i10 == -1 ? 0 : i10;
            this.mItalic = (i10 & 2) != 0;
            this.mWeight = i11 == -1 ? (i10 & 1) != 0 ? BOLD : NORMAL : i11;
        }
    }

    public final void addCustomFont(@NotNull String fontFamily, Typeface typeface) {
        Intrinsics.checkNotNullParameter(fontFamily, "fontFamily");
        if (typeface != null) {
            this.mCustomTypefaceCache.put(fontFamily, typeface);
        }
    }

    @NotNull
    public final Typeface getTypeface(@NotNull String fontFamilyName, int i10, int i11, @NotNull AssetManager assetManager) {
        Intrinsics.checkNotNullParameter(fontFamilyName, "fontFamilyName");
        Intrinsics.checkNotNullParameter(assetManager, "assetManager");
        return getTypeface(fontFamilyName, new TypefaceStyle(i10, i11), assetManager);
    }

    @NotNull
    public final Typeface getTypeface(@NotNull String fontFamilyName, @NotNull TypefaceStyle typefaceStyle, @NotNull AssetManager assetManager) {
        Intrinsics.checkNotNullParameter(fontFamilyName, "fontFamilyName");
        Intrinsics.checkNotNullParameter(typefaceStyle, "typefaceStyle");
        Intrinsics.checkNotNullParameter(assetManager, "assetManager");
        Typeface typeface = this.mCustomTypefaceCache.get(fontFamilyName);
        if (typeface != null) {
            return typefaceStyle.apply(typeface);
        }
        AssetFontFamily assetFontFamily = this.mFontCache.get(fontFamilyName);
        if (assetFontFamily == null) {
            assetFontFamily = new AssetFontFamily();
            this.mFontCache.put(fontFamilyName, assetFontFamily);
        }
        int nearestStyle = typefaceStyle.getNearestStyle();
        Typeface typefaceForStyle = assetFontFamily.getTypefaceForStyle(nearestStyle);
        if (typefaceForStyle == null) {
            Typeface createAssetTypeface = Companion.createAssetTypeface(fontFamilyName, nearestStyle, assetManager);
            assetFontFamily.setTypefaceForStyle(nearestStyle, createAssetTypeface);
            return createAssetTypeface;
        }
        return typefaceForStyle;
    }
}
