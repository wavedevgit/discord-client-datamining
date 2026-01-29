package com.facebook.react.views.text;

import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.text.TextUtils;
import androidx.recyclerview.widget.h;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactFontManager;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007J\u0012\u0010\b\u001a\u00020\u00052\b\u0010\t\u001a\u0004\u0018\u00010\u0007H\u0007J\u0014\u0010\n\u001a\u0004\u0018\u00010\u00072\b\u0010\u000b\u001a\u0004\u0018\u00010\fH\u0007J4\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u00052\b\u0010\u0012\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u0013\u001a\u00020\u0014H\u0007¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/views/text/ReactTypefaceUtils;", "", "<init>", "()V", "parseFontWeight", "", "fontWeightString", "", "parseFontStyle", "fontStyleString", "parseFontVariant", "fontVariantArray", "Lcom/facebook/react/bridge/ReadableArray;", "applyStyles", "Landroid/graphics/Typeface;", "typeface", "style", "weight", "fontFamilyName", "assetManager", "Landroid/content/res/AssetManager;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactTypefaceUtils {
    @NotNull
    public static final ReactTypefaceUtils INSTANCE = new ReactTypefaceUtils();

    private ReactTypefaceUtils() {
    }

    @NotNull
    public static final Typeface applyStyles(Typeface typeface, int i10, int i11, String str, @NotNull AssetManager assetManager) {
        Intrinsics.checkNotNullParameter(assetManager, "assetManager");
        ReactFontManager.TypefaceStyle typefaceStyle = new ReactFontManager.TypefaceStyle(i10, i11);
        if (str == null) {
            if (typeface == null) {
                typeface = Typeface.DEFAULT;
            }
            Intrinsics.checkNotNull(typeface);
            return typefaceStyle.apply(typeface);
        }
        return ReactFontManager.Companion.getInstance().getTypeface(str, typefaceStyle, assetManager);
    }

    public static final int parseFontStyle(String str) {
        if (Intrinsics.areEqual(str, Fonts.Font.STYLE_ITALIC)) {
            return 2;
        }
        if (Intrinsics.areEqual(str, "normal")) {
            return 0;
        }
        return -1;
    }

    public static final String parseFontVariant(ReadableArray readableArray) {
        if (readableArray != null && readableArray.size() != 0) {
            ArrayList arrayList = new ArrayList();
            int size = readableArray.size();
            for (int i10 = 0; i10 < size; i10++) {
                String string = readableArray.getString(i10);
                if (string != null) {
                    switch (string.hashCode()) {
                        case -1983120972:
                            if (!string.equals("stylistic-thirteen")) {
                                break;
                            } else {
                                arrayList.add("'ss13'");
                                continue;
                            }
                        case -1933522176:
                            if (!string.equals("stylistic-fifteen")) {
                                break;
                            } else {
                                arrayList.add("'ss15'");
                                continue;
                            }
                        case -1534462052:
                            if (!string.equals("stylistic-eighteen")) {
                                break;
                            } else {
                                arrayList.add("'ss18'");
                                continue;
                            }
                        case -1195362251:
                            if (!string.equals("proportional-nums")) {
                                break;
                            } else {
                                arrayList.add("'pnum'");
                                continue;
                            }
                        case -1061392823:
                            if (!string.equals("lining-nums")) {
                                break;
                            } else {
                                arrayList.add("'lnum'");
                                continue;
                            }
                        case -899039099:
                            if (!string.equals("historical-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'hlig'");
                                continue;
                            }
                        case -771984547:
                            if (!string.equals("tabular-nums")) {
                                break;
                            } else {
                                arrayList.add("'tnum'");
                                continue;
                            }
                        case -672279417:
                            if (!string.equals("discretionary-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'dlig'");
                                continue;
                            }
                        case -659678800:
                            if (!string.equals("oldstyle-nums")) {
                                break;
                            } else {
                                arrayList.add("'onum'");
                                continue;
                            }
                        case 249095901:
                            if (!string.equals("no-contextual")) {
                                break;
                            } else {
                                arrayList.add("'calt' off");
                                continue;
                            }
                        case 273808209:
                            if (!string.equals("contextual")) {
                                break;
                            } else {
                                arrayList.add("'calt'");
                                continue;
                            }
                        case 289909490:
                            if (!string.equals("no-common-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'liga' off");
                                arrayList.add("'clig' off");
                                continue;
                            }
                        case 296506098:
                            if (!string.equals("stylistic-eight")) {
                                break;
                            } else {
                                arrayList.add("'ss08'");
                                continue;
                            }
                        case 309330544:
                            if (!string.equals("stylistic-seven")) {
                                break;
                            } else {
                                arrayList.add("'ss07'");
                                continue;
                            }
                        case 310339585:
                            if (!string.equals("stylistic-three")) {
                                break;
                            } else {
                                arrayList.add("'ss03'");
                                continue;
                            }
                        case 604478526:
                            if (!string.equals("stylistic-eleven")) {
                                break;
                            } else {
                                arrayList.add("'ss11'");
                                continue;
                            }
                        case 915975441:
                            if (!string.equals("no-historical-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'hlig' off");
                                continue;
                            }
                        case 979426287:
                            if (!string.equals("stylistic-five")) {
                                break;
                            } else {
                                arrayList.add("'ss05'");
                                continue;
                            }
                        case 979432035:
                            if (!string.equals("stylistic-four")) {
                                break;
                            } else {
                                arrayList.add("'ss04'");
                                continue;
                            }
                        case 979664367:
                            if (!string.equals("stylistic-nine")) {
                                break;
                            } else {
                                arrayList.add("'ss09'");
                                continue;
                            }
                        case 1001434505:
                            if (!string.equals("stylistic-one")) {
                                break;
                            } else {
                                arrayList.add("'ss01'");
                                continue;
                            }
                        case 1001438213:
                            if (!string.equals("stylistic-six")) {
                                break;
                            } else {
                                arrayList.add("'ss06'");
                                continue;
                            }
                        case 1001439040:
                            if (!string.equals("stylistic-ten")) {
                                break;
                            } else {
                                arrayList.add("'ss10'");
                                continue;
                            }
                        case 1001439599:
                            if (!string.equals("stylistic-two")) {
                                break;
                            } else {
                                arrayList.add("'ss02'");
                                continue;
                            }
                        case 1030714463:
                            if (!string.equals("stylistic-sixteen")) {
                                break;
                            } else {
                                arrayList.add("'ss16'");
                                continue;
                            }
                        case 1044065430:
                            if (!string.equals("stylistic-twelve")) {
                                break;
                            } else {
                                arrayList.add("'ss12'");
                                continue;
                            }
                        case 1044067310:
                            if (!string.equals("stylistic-twenty")) {
                                break;
                            } else {
                                arrayList.add("'ss20'");
                                continue;
                            }
                        case 1082592379:
                            if (!string.equals("no-discretionary-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'dlig' off");
                                continue;
                            }
                        case 1183323111:
                            if (!string.equals("small-caps")) {
                                break;
                            } else {
                                arrayList.add("'smcp'");
                                continue;
                            }
                        case 1223989350:
                            if (!string.equals("common-ligatures")) {
                                break;
                            } else {
                                arrayList.add("'liga'");
                                arrayList.add("'clig'");
                                continue;
                            }
                        case 1463562569:
                            if (!string.equals("stylistic-nineteen")) {
                                break;
                            } else {
                                arrayList.add("'ss19'");
                                continue;
                            }
                        case 1648446397:
                            if (!string.equals("stylistic-fourteen")) {
                                break;
                            } else {
                                arrayList.add("'ss14'");
                                continue;
                            }
                        case 2097122634:
                            if (!string.equals("stylistic-seventeen")) {
                                break;
                            } else {
                                arrayList.add("'ss17'");
                                continue;
                            }
                    }
                }
            }
            return TextUtils.join(", ", arrayList);
        }
        return null;
    }

    public static final int parseFontWeight(String str) {
        if (str != null) {
            switch (str.hashCode()) {
                case -1039745817:
                    if (str.equals("normal")) {
                        return ReactFontManager.TypefaceStyle.NORMAL;
                    }
                    return -1;
                case 48625:
                    if (str.equals("100")) {
                        return 100;
                    }
                    return -1;
                case 49586:
                    if (str.equals("200")) {
                        return h.DEFAULT_DRAG_ANIMATION_DURATION;
                    }
                    return -1;
                case 50547:
                    if (str.equals("300")) {
                        return ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
                    }
                    return -1;
                case 51508:
                    if (str.equals("400")) {
                        return ReactFontManager.TypefaceStyle.NORMAL;
                    }
                    return -1;
                case 52469:
                    if (str.equals("500")) {
                        return 500;
                    }
                    return -1;
                case 53430:
                    if (str.equals("600")) {
                        return 600;
                    }
                    return -1;
                case 54391:
                    if (str.equals("700")) {
                        return ReactFontManager.TypefaceStyle.BOLD;
                    }
                    return -1;
                case 55352:
                    if (str.equals("800")) {
                        return 800;
                    }
                    return -1;
                case 56313:
                    if (str.equals("900")) {
                        return 900;
                    }
                    return -1;
                case 3029637:
                    if (str.equals("bold")) {
                        return ReactFontManager.TypefaceStyle.BOLD;
                    }
                    return -1;
                default:
                    return -1;
            }
        }
        return -1;
    }
}
