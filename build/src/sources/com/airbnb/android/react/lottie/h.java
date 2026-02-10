package com.airbnb.android.react.lottie;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.net.Uri;
import android.util.Log;
import android.widget.ImageView;
import com.airbnb.lottie.LottieAnimationView;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.util.RNLog;
import com.facebook.react.views.text.ReactFontManager;
import java.io.File;
import java.io.FileInputStream;
import java.lang.ref.WeakReference;
import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;
import java.util.regex.Pattern;
import java.util.zip.ZipInputStream;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import l5.b0;
import l5.h0;
import l5.i0;
import l5.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: t  reason: collision with root package name */
    public static final b f7814t = new b(null);

    /* renamed from: u  reason: collision with root package name */
    private static Function1 f7815u;

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f7816a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7817b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7818c;

    /* renamed from: d  reason: collision with root package name */
    private String f7819d;

    /* renamed from: e  reason: collision with root package name */
    private ImageView.ScaleType f7820e;

    /* renamed from: f  reason: collision with root package name */
    private String f7821f;

    /* renamed from: g  reason: collision with root package name */
    private Boolean f7822g;

    /* renamed from: h  reason: collision with root package name */
    private Boolean f7823h;

    /* renamed from: i  reason: collision with root package name */
    private ReadableArray f7824i;

    /* renamed from: j  reason: collision with root package name */
    private ReadableArray f7825j;

    /* renamed from: k  reason: collision with root package name */
    private h0 f7826k;

    /* renamed from: l  reason: collision with root package name */
    private Integer f7827l;

    /* renamed from: m  reason: collision with root package name */
    private String f7828m;

    /* renamed from: n  reason: collision with root package name */
    private String f7829n;

    /* renamed from: o  reason: collision with root package name */
    private String f7830o;

    /* renamed from: p  reason: collision with root package name */
    private Float f7831p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f7832q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f7833r;

    /* renamed from: s  reason: collision with root package name */
    private Float f7834s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends l5.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ LottieAnimationView f7835a;

        a(LottieAnimationView lottieAnimationView) {
            this.f7835a = lottieAnimationView;
        }

        @Override // l5.b
        public Typeface a(String fontFamily) {
            Intrinsics.checkNotNullParameter(fontFamily, "fontFamily");
            ReactFontManager companion = ReactFontManager.Companion.getInstance();
            AssetManager assets = this.f7835a.getContext().getAssets();
            Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
            return companion.getTypeface(fontFamily, -1, -1, assets);
        }

        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x004d, code lost:
            if (r5.equals("Regular") == false) goto L26;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0056, code lost:
            if (r5.equals(com.facebook.react.views.progressbar.ReactProgressBarViewManager.DEFAULT_STYLE) == false) goto L26;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0059, code lost:
            r4 = com.facebook.react.views.text.ReactFontManager.TypefaceStyle.NORMAL;
         */
        @Override // l5.b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public android.graphics.Typeface b(java.lang.String r4, java.lang.String r5, java.lang.String r6) {
            /*
                r3 = this;
                java.lang.String r0 = "fontFamily"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                java.lang.String r4 = "fontStyle"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r4)
                java.lang.String r4 = "fontName"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r4)
                int r4 = r5.hashCode()
                r0 = -1
                switch(r4) {
                    case -1994163307: goto L5c;
                    case -1955878649: goto L50;
                    case -1543850116: goto L47;
                    case 2076325: goto L3b;
                    case 2605753: goto L30;
                    case 64266207: goto L24;
                    case 73417974: goto L18;
                    default: goto L17;
                }
            L17:
                goto L64
            L18:
                java.lang.String r4 = "Light"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L21
                goto L64
            L21:
                r4 = 200(0xc8, float:2.8E-43)
                goto L68
            L24:
                java.lang.String r4 = "Black"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L2d
                goto L64
            L2d:
                r4 = 900(0x384, float:1.261E-42)
                goto L68
            L30:
                java.lang.String r4 = "Thin"
                boolean r4 = r5.equals(r4)
                if (r4 == 0) goto L64
                r4 = 100
                goto L68
            L3b:
                java.lang.String r4 = "Bold"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L44
                goto L64
            L44:
                r4 = 700(0x2bc, float:9.81E-43)
                goto L68
            L47:
                java.lang.String r4 = "Regular"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L59
                goto L64
            L50:
                java.lang.String r4 = "Normal"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L59
                goto L64
            L59:
                r4 = 400(0x190, float:5.6E-43)
                goto L68
            L5c:
                java.lang.String r4 = "Medium"
                boolean r4 = r5.equals(r4)
                if (r4 != 0) goto L66
            L64:
                r4 = r0
                goto L68
            L66:
                r4 = 500(0x1f4, float:7.0E-43)
            L68:
                com.facebook.react.views.text.ReactFontManager$Companion r5 = com.facebook.react.views.text.ReactFontManager.Companion
                com.facebook.react.views.text.ReactFontManager r5 = r5.getInstance()
                com.airbnb.lottie.LottieAnimationView r1 = r3.f7835a
                android.content.Context r1 = r1.getContext()
                android.content.res.AssetManager r1 = r1.getAssets()
                java.lang.String r2 = "getAssets(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                android.graphics.Typeface r4 = r5.getTypeface(r6, r0, r4, r1)
                return r4
            */
            throw new UnsupportedOperationException("Method not decompiled: com.airbnb.android.react.lottie.h.a.b(java.lang.String, java.lang.String, java.lang.String):android.graphics.Typeface");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(Function1 function1) {
            h.f7815u = function1;
        }

        private b() {
        }
    }

    public h(LottieAnimationView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f7817b = "lottie-react-native";
        this.f7816a = new WeakReference(view);
        view.setFontAssetDelegate(new a(view));
    }

    private final void c(ReadableMap readableMap, LottieAnimationView lottieAnimationView) {
        int i10;
        List l10;
        if (readableMap.getType(ViewProps.COLOR) == ReadableType.Map) {
            ReadableMap map = readableMap.getMap(ViewProps.COLOR);
            Context context = lottieAnimationView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Integer color = ColorPropConverter.getColor(map, context);
            if (color != null) {
                i10 = color.intValue();
            } else {
                i10 = 0;
            }
        } else {
            i10 = readableMap.getInt(ViewProps.COLOR);
        }
        String quote = Pattern.quote(".");
        Intrinsics.checkNotNullExpressionValue(quote, "quote(...)");
        List k10 = new Regex(quote).k(readableMap.getString("keypath") + ".**", 0);
        if (!k10.isEmpty()) {
            ListIterator listIterator = k10.listIterator(k10.size());
            while (listIterator.hasPrevious()) {
                if (((String) listIterator.previous()).length() != 0) {
                    l10 = CollectionsKt.a1(k10, listIterator.nextIndex() + 1);
                    break;
                }
            }
        }
        l10 = CollectionsKt.l();
        String[] strArr = (String[]) l10.toArray(new String[0]);
        lottieAnimationView.k(new r5.e((String[]) Arrays.copyOf(strArr, strArr.length)), b0.K, new z5.c(new i0(i10)));
    }

    public final void b() {
        int i10;
        Object b10;
        String str;
        LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f7816a.get();
        if (lottieAnimationView != null) {
            ReadableArray readableArray = this.f7825j;
            if (readableArray != null && readableArray.size() > 0) {
                j0 j0Var = new j0(lottieAnimationView);
                int size = readableArray.size();
                for (int i11 = 0; i11 < size; i11++) {
                    ReadableMap map = readableArray.getMap(i11);
                    if (map != null) {
                        j0Var.e(map.getString("find"), map.getString("replace"));
                    }
                }
                lottieAnimationView.setTextDelegate(j0Var);
            }
            String str2 = this.f7828m;
            if (str2 != null) {
                lottieAnimationView.A(str2, String.valueOf(str2.hashCode()));
                this.f7828m = null;
            }
            String str3 = this.f7829n;
            if (str3 != null) {
                File file = new File(str3);
                if (file.exists()) {
                    lottieAnimationView.y(new FileInputStream(file), String.valueOf(str3.hashCode()));
                } else {
                    lottieAnimationView.B(str3, String.valueOf(str3.hashCode()));
                }
                this.f7829n = null;
            }
            String str4 = this.f7830o;
            if (str4 != null) {
                Function1 function1 = f7815u;
                if (function1 != null && (str = (String) function1.invoke(str4)) != null) {
                    str4 = str;
                }
                File file2 = new File(str4);
                if (file2.exists()) {
                    lottieAnimationView.z(new ZipInputStream(new FileInputStream(file2)), String.valueOf(str4.hashCode()));
                    this.f7830o = null;
                    return;
                }
                try {
                    Result.a aVar = Result.f31762e;
                    b10 = Result.b(Uri.parse(str4).getScheme());
                } catch (Throwable th2) {
                    Result.a aVar2 = Result.f31762e;
                    b10 = Result.b(kotlin.c.a(th2));
                }
                if (Result.g(b10)) {
                    b10 = null;
                }
                String str5 = (String) b10;
                if (str5 != null) {
                    if (Intrinsics.areEqual(str5, "file")) {
                        String path = Uri.parse(str4).getPath();
                        if (path != null) {
                            lottieAnimationView.z(new ZipInputStream(new FileInputStream(new File(path))), String.valueOf(str4.hashCode()));
                        } else {
                            Log.w(this.f7817b, "URI path is null for asset: " + str4);
                        }
                    } else {
                        lottieAnimationView.setAnimationFromUrl(str4);
                    }
                    this.f7830o = null;
                    return;
                }
                int identifier = lottieAnimationView.getResources().getIdentifier(str4, "raw", lottieAnimationView.getContext().getPackageName());
                if (identifier == 0) {
                    RNLog.e("Animation for " + str4 + " was not found in raw resources");
                    return;
                }
                lottieAnimationView.setAnimation(identifier);
                this.f7818c = false;
                this.f7830o = null;
            }
            if (this.f7818c) {
                lottieAnimationView.setAnimation(this.f7819d);
                this.f7818c = false;
            }
            Float f10 = this.f7831p;
            if (f10 != null) {
                lottieAnimationView.setProgress(f10.floatValue());
                this.f7831p = null;
            }
            Boolean bool = this.f7832q;
            if (bool != null) {
                if (bool.booleanValue()) {
                    i10 = -1;
                } else {
                    i10 = 0;
                }
                lottieAnimationView.setRepeatCount(i10);
                this.f7832q = null;
            }
            Boolean bool2 = this.f7833r;
            if (bool2 != null && bool2.booleanValue() && !lottieAnimationView.t()) {
                lottieAnimationView.playAnimation();
            }
            Float f11 = this.f7834s;
            if (f11 != null) {
                lottieAnimationView.setSpeed(f11.floatValue());
                this.f7834s = null;
            }
            ImageView.ScaleType scaleType = this.f7820e;
            if (scaleType != null) {
                lottieAnimationView.setScaleType(scaleType);
                this.f7820e = null;
            }
            h0 h0Var = this.f7826k;
            if (h0Var != null) {
                lottieAnimationView.setRenderMode(h0Var);
                this.f7826k = null;
            }
            Integer num = this.f7827l;
            if (num != null) {
                lottieAnimationView.setLayerType(num.intValue(), null);
            }
            String str6 = this.f7821f;
            if (str6 != null) {
                lottieAnimationView.setImageAssetsFolder(str6);
                this.f7821f = null;
            }
            Boolean bool3 = this.f7822g;
            if (bool3 != null) {
                lottieAnimationView.p(bool3.booleanValue());
                this.f7822g = null;
            }
            Boolean bool4 = this.f7823h;
            if (bool4 != null) {
                lottieAnimationView.setSafeMode(bool4.booleanValue());
                this.f7823h = null;
            }
            ReadableArray readableArray2 = this.f7824i;
            if (readableArray2 != null && readableArray2.size() > 0) {
                int size2 = readableArray2.size();
                for (int i12 = 0; i12 < size2; i12++) {
                    ReadableMap map2 = readableArray2.getMap(i12);
                    if (map2 != null) {
                        c(map2, lottieAnimationView);
                    }
                }
            }
        }
    }

    public final void d(String str) {
        this.f7828m = str;
    }

    public final void e(String str) {
        this.f7819d = str;
        this.f7818c = true;
    }

    public final void f(String str) {
        this.f7829n = str;
    }

    public final void g(Boolean bool) {
        this.f7833r = bool;
    }

    public final void h(ReadableArray readableArray) {
        this.f7824i = readableArray;
    }

    public final void i(Boolean bool) {
        this.f7822g = bool;
    }

    public final void j(Boolean bool) {
        this.f7823h = bool;
    }

    public final void k(String str) {
        this.f7821f = str;
    }

    public final void l(Integer num) {
        this.f7827l = num;
    }

    public final void m(Boolean bool) {
        this.f7832q = bool;
    }

    public final void n(Float f10) {
        this.f7831p = f10;
    }

    public final void o(h0 h0Var) {
        this.f7826k = h0Var;
    }

    public final void p(ImageView.ScaleType scaleType) {
        this.f7820e = scaleType;
    }

    public final void q(String str) {
        this.f7830o = str;
    }

    public final void r(Float f10) {
        this.f7834s = f10;
    }

    public final void s(ReadableArray readableArray) {
        this.f7825j = readableArray;
    }
}
