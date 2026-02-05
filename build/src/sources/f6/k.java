package f6;

import android.graphics.Matrix;
import android.util.Log;
import android.util.Xml;
import androidx.recyclerview.widget.RecyclerView;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactFontManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.swmansion.reanimated.BuildConfig;
import f6.b;
import f6.e;
import f6.g;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.zip.GZIPInputStream;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.ext.DefaultHandler2;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: d  reason: collision with root package name */
    private int f22585d;

    /* renamed from: a  reason: collision with root package name */
    private f6.g f22582a = null;

    /* renamed from: b  reason: collision with root package name */
    private g.j0 f22583b = null;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22584c = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22586e = false;

    /* renamed from: f  reason: collision with root package name */
    private h f22587f = null;

    /* renamed from: g  reason: collision with root package name */
    private StringBuilder f22588g = null;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22589h = false;

    /* renamed from: i  reason: collision with root package name */
    private StringBuilder f22590i = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f22591a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f22592b;

        static {
            int[] iArr = new int[g.values().length];
            f22592b = iArr;
            try {
                iArr[g.x.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f22592b[g.y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f22592b[g.width.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f22592b[g.height.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f22592b[g.version.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f22592b[g.href.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f22592b[g.preserveAspectRatio.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f22592b[g.d.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f22592b[g.pathLength.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f22592b[g.rx.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f22592b[g.ry.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f22592b[g.cx.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f22592b[g.cy.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f22592b[g.r.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f22592b[g.x1.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f22592b[g.y1.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f22592b[g.x2.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f22592b[g.y2.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f22592b[g.dx.ordinal()] = 19;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f22592b[g.dy.ordinal()] = 20;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f22592b[g.requiredFeatures.ordinal()] = 21;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f22592b[g.requiredExtensions.ordinal()] = 22;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f22592b[g.systemLanguage.ordinal()] = 23;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                f22592b[g.requiredFormats.ordinal()] = 24;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                f22592b[g.requiredFonts.ordinal()] = 25;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f22592b[g.refX.ordinal()] = 26;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                f22592b[g.refY.ordinal()] = 27;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                f22592b[g.markerWidth.ordinal()] = 28;
            } catch (NoSuchFieldError unused28) {
            }
            try {
                f22592b[g.markerHeight.ordinal()] = 29;
            } catch (NoSuchFieldError unused29) {
            }
            try {
                f22592b[g.markerUnits.ordinal()] = 30;
            } catch (NoSuchFieldError unused30) {
            }
            try {
                f22592b[g.orient.ordinal()] = 31;
            } catch (NoSuchFieldError unused31) {
            }
            try {
                f22592b[g.gradientUnits.ordinal()] = 32;
            } catch (NoSuchFieldError unused32) {
            }
            try {
                f22592b[g.gradientTransform.ordinal()] = 33;
            } catch (NoSuchFieldError unused33) {
            }
            try {
                f22592b[g.spreadMethod.ordinal()] = 34;
            } catch (NoSuchFieldError unused34) {
            }
            try {
                f22592b[g.fx.ordinal()] = 35;
            } catch (NoSuchFieldError unused35) {
            }
            try {
                f22592b[g.fy.ordinal()] = 36;
            } catch (NoSuchFieldError unused36) {
            }
            try {
                f22592b[g.offset.ordinal()] = 37;
            } catch (NoSuchFieldError unused37) {
            }
            try {
                f22592b[g.clipPathUnits.ordinal()] = 38;
            } catch (NoSuchFieldError unused38) {
            }
            try {
                f22592b[g.startOffset.ordinal()] = 39;
            } catch (NoSuchFieldError unused39) {
            }
            try {
                f22592b[g.patternUnits.ordinal()] = 40;
            } catch (NoSuchFieldError unused40) {
            }
            try {
                f22592b[g.patternContentUnits.ordinal()] = 41;
            } catch (NoSuchFieldError unused41) {
            }
            try {
                f22592b[g.patternTransform.ordinal()] = 42;
            } catch (NoSuchFieldError unused42) {
            }
            try {
                f22592b[g.maskUnits.ordinal()] = 43;
            } catch (NoSuchFieldError unused43) {
            }
            try {
                f22592b[g.maskContentUnits.ordinal()] = 44;
            } catch (NoSuchFieldError unused44) {
            }
            try {
                f22592b[g.style.ordinal()] = 45;
            } catch (NoSuchFieldError unused45) {
            }
            try {
                f22592b[g.CLASS.ordinal()] = 46;
            } catch (NoSuchFieldError unused46) {
            }
            try {
                f22592b[g.fill.ordinal()] = 47;
            } catch (NoSuchFieldError unused47) {
            }
            try {
                f22592b[g.fill_rule.ordinal()] = 48;
            } catch (NoSuchFieldError unused48) {
            }
            try {
                f22592b[g.fill_opacity.ordinal()] = 49;
            } catch (NoSuchFieldError unused49) {
            }
            try {
                f22592b[g.stroke.ordinal()] = 50;
            } catch (NoSuchFieldError unused50) {
            }
            try {
                f22592b[g.stroke_opacity.ordinal()] = 51;
            } catch (NoSuchFieldError unused51) {
            }
            try {
                f22592b[g.stroke_width.ordinal()] = 52;
            } catch (NoSuchFieldError unused52) {
            }
            try {
                f22592b[g.stroke_linecap.ordinal()] = 53;
            } catch (NoSuchFieldError unused53) {
            }
            try {
                f22592b[g.stroke_linejoin.ordinal()] = 54;
            } catch (NoSuchFieldError unused54) {
            }
            try {
                f22592b[g.stroke_miterlimit.ordinal()] = 55;
            } catch (NoSuchFieldError unused55) {
            }
            try {
                f22592b[g.stroke_dasharray.ordinal()] = 56;
            } catch (NoSuchFieldError unused56) {
            }
            try {
                f22592b[g.stroke_dashoffset.ordinal()] = 57;
            } catch (NoSuchFieldError unused57) {
            }
            try {
                f22592b[g.opacity.ordinal()] = 58;
            } catch (NoSuchFieldError unused58) {
            }
            try {
                f22592b[g.color.ordinal()] = 59;
            } catch (NoSuchFieldError unused59) {
            }
            try {
                f22592b[g.font.ordinal()] = 60;
            } catch (NoSuchFieldError unused60) {
            }
            try {
                f22592b[g.font_family.ordinal()] = 61;
            } catch (NoSuchFieldError unused61) {
            }
            try {
                f22592b[g.font_size.ordinal()] = 62;
            } catch (NoSuchFieldError unused62) {
            }
            try {
                f22592b[g.font_weight.ordinal()] = 63;
            } catch (NoSuchFieldError unused63) {
            }
            try {
                f22592b[g.font_style.ordinal()] = 64;
            } catch (NoSuchFieldError unused64) {
            }
            try {
                f22592b[g.text_decoration.ordinal()] = 65;
            } catch (NoSuchFieldError unused65) {
            }
            try {
                f22592b[g.direction.ordinal()] = 66;
            } catch (NoSuchFieldError unused66) {
            }
            try {
                f22592b[g.text_anchor.ordinal()] = 67;
            } catch (NoSuchFieldError unused67) {
            }
            try {
                f22592b[g.overflow.ordinal()] = 68;
            } catch (NoSuchFieldError unused68) {
            }
            try {
                f22592b[g.marker.ordinal()] = 69;
            } catch (NoSuchFieldError unused69) {
            }
            try {
                f22592b[g.marker_start.ordinal()] = 70;
            } catch (NoSuchFieldError unused70) {
            }
            try {
                f22592b[g.marker_mid.ordinal()] = 71;
            } catch (NoSuchFieldError unused71) {
            }
            try {
                f22592b[g.marker_end.ordinal()] = 72;
            } catch (NoSuchFieldError unused72) {
            }
            try {
                f22592b[g.display.ordinal()] = 73;
            } catch (NoSuchFieldError unused73) {
            }
            try {
                f22592b[g.visibility.ordinal()] = 74;
            } catch (NoSuchFieldError unused74) {
            }
            try {
                f22592b[g.stop_color.ordinal()] = 75;
            } catch (NoSuchFieldError unused75) {
            }
            try {
                f22592b[g.stop_opacity.ordinal()] = 76;
            } catch (NoSuchFieldError unused76) {
            }
            try {
                f22592b[g.clip.ordinal()] = 77;
            } catch (NoSuchFieldError unused77) {
            }
            try {
                f22592b[g.clip_path.ordinal()] = 78;
            } catch (NoSuchFieldError unused78) {
            }
            try {
                f22592b[g.clip_rule.ordinal()] = 79;
            } catch (NoSuchFieldError unused79) {
            }
            try {
                f22592b[g.mask.ordinal()] = 80;
            } catch (NoSuchFieldError unused80) {
            }
            try {
                f22592b[g.solid_color.ordinal()] = 81;
            } catch (NoSuchFieldError unused81) {
            }
            try {
                f22592b[g.solid_opacity.ordinal()] = 82;
            } catch (NoSuchFieldError unused82) {
            }
            try {
                f22592b[g.viewport_fill.ordinal()] = 83;
            } catch (NoSuchFieldError unused83) {
            }
            try {
                f22592b[g.viewport_fill_opacity.ordinal()] = 84;
            } catch (NoSuchFieldError unused84) {
            }
            try {
                f22592b[g.vector_effect.ordinal()] = 85;
            } catch (NoSuchFieldError unused85) {
            }
            try {
                f22592b[g.image_rendering.ordinal()] = 86;
            } catch (NoSuchFieldError unused86) {
            }
            try {
                f22592b[g.viewBox.ordinal()] = 87;
            } catch (NoSuchFieldError unused87) {
            }
            try {
                f22592b[g.type.ordinal()] = 88;
            } catch (NoSuchFieldError unused88) {
            }
            try {
                f22592b[g.media.ordinal()] = 89;
            } catch (NoSuchFieldError unused89) {
            }
            int[] iArr2 = new int[h.values().length];
            f22591a = iArr2;
            try {
                iArr2[h.svg.ordinal()] = 1;
            } catch (NoSuchFieldError unused90) {
            }
            try {
                f22591a[h.g.ordinal()] = 2;
            } catch (NoSuchFieldError unused91) {
            }
            try {
                f22591a[h.a.ordinal()] = 3;
            } catch (NoSuchFieldError unused92) {
            }
            try {
                f22591a[h.defs.ordinal()] = 4;
            } catch (NoSuchFieldError unused93) {
            }
            try {
                f22591a[h.use.ordinal()] = 5;
            } catch (NoSuchFieldError unused94) {
            }
            try {
                f22591a[h.path.ordinal()] = 6;
            } catch (NoSuchFieldError unused95) {
            }
            try {
                f22591a[h.rect.ordinal()] = 7;
            } catch (NoSuchFieldError unused96) {
            }
            try {
                f22591a[h.circle.ordinal()] = 8;
            } catch (NoSuchFieldError unused97) {
            }
            try {
                f22591a[h.ellipse.ordinal()] = 9;
            } catch (NoSuchFieldError unused98) {
            }
            try {
                f22591a[h.line.ordinal()] = 10;
            } catch (NoSuchFieldError unused99) {
            }
            try {
                f22591a[h.polyline.ordinal()] = 11;
            } catch (NoSuchFieldError unused100) {
            }
            try {
                f22591a[h.polygon.ordinal()] = 12;
            } catch (NoSuchFieldError unused101) {
            }
            try {
                f22591a[h.text.ordinal()] = 13;
            } catch (NoSuchFieldError unused102) {
            }
            try {
                f22591a[h.tspan.ordinal()] = 14;
            } catch (NoSuchFieldError unused103) {
            }
            try {
                f22591a[h.tref.ordinal()] = 15;
            } catch (NoSuchFieldError unused104) {
            }
            try {
                f22591a[h.SWITCH.ordinal()] = 16;
            } catch (NoSuchFieldError unused105) {
            }
            try {
                f22591a[h.symbol.ordinal()] = 17;
            } catch (NoSuchFieldError unused106) {
            }
            try {
                f22591a[h.marker.ordinal()] = 18;
            } catch (NoSuchFieldError unused107) {
            }
            try {
                f22591a[h.linearGradient.ordinal()] = 19;
            } catch (NoSuchFieldError unused108) {
            }
            try {
                f22591a[h.radialGradient.ordinal()] = 20;
            } catch (NoSuchFieldError unused109) {
            }
            try {
                f22591a[h.stop.ordinal()] = 21;
            } catch (NoSuchFieldError unused110) {
            }
            try {
                f22591a[h.title.ordinal()] = 22;
            } catch (NoSuchFieldError unused111) {
            }
            try {
                f22591a[h.desc.ordinal()] = 23;
            } catch (NoSuchFieldError unused112) {
            }
            try {
                f22591a[h.clipPath.ordinal()] = 24;
            } catch (NoSuchFieldError unused113) {
            }
            try {
                f22591a[h.textPath.ordinal()] = 25;
            } catch (NoSuchFieldError unused114) {
            }
            try {
                f22591a[h.pattern.ordinal()] = 26;
            } catch (NoSuchFieldError unused115) {
            }
            try {
                f22591a[h.image.ordinal()] = 27;
            } catch (NoSuchFieldError unused116) {
            }
            try {
                f22591a[h.view.ordinal()] = 28;
            } catch (NoSuchFieldError unused117) {
            }
            try {
                f22591a[h.mask.ordinal()] = 29;
            } catch (NoSuchFieldError unused118) {
            }
            try {
                f22591a[h.style.ordinal()] = 30;
            } catch (NoSuchFieldError unused119) {
            }
            try {
                f22591a[h.solidColor.ordinal()] = 31;
            } catch (NoSuchFieldError unused120) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private static final Map f22593a;

        static {
            HashMap hashMap = new HashMap(10);
            f22593a = hashMap;
            hashMap.put(ViewProps.NONE, e.a.none);
            hashMap.put("xMinYMin", e.a.xMinYMin);
            hashMap.put("xMidYMin", e.a.xMidYMin);
            hashMap.put("xMaxYMin", e.a.xMaxYMin);
            hashMap.put("xMinYMid", e.a.xMinYMid);
            hashMap.put("xMidYMid", e.a.xMidYMid);
            hashMap.put("xMaxYMid", e.a.xMaxYMid);
            hashMap.put("xMinYMax", e.a.xMinYMax);
            hashMap.put("xMidYMax", e.a.xMidYMax);
            hashMap.put("xMaxYMax", e.a.xMaxYMax);
        }

        static e.a a(String str) {
            return (e.a) f22593a.get(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private static final Map f22594a;

        static {
            HashMap hashMap = new HashMap(47);
            f22594a = hashMap;
            hashMap.put("aliceblue", -984833);
            hashMap.put("antiquewhite", -332841);
            hashMap.put("aqua", -16711681);
            hashMap.put("aquamarine", -8388652);
            hashMap.put("azure", -983041);
            hashMap.put("beige", -657956);
            hashMap.put("bisque", -6972);
            hashMap.put("black", -16777216);
            hashMap.put("blanchedalmond", -5171);
            hashMap.put("blue", -16776961);
            hashMap.put("blueviolet", -7722014);
            hashMap.put("brown", -5952982);
            hashMap.put("burlywood", -2180985);
            hashMap.put("cadetblue", -10510688);
            hashMap.put("chartreuse", -8388864);
            hashMap.put("chocolate", -2987746);
            hashMap.put("coral", -32944);
            hashMap.put("cornflowerblue", -10185235);
            hashMap.put("cornsilk", -1828);
            hashMap.put("crimson", -2354116);
            hashMap.put("cyan", -16711681);
            hashMap.put("darkblue", -16777077);
            hashMap.put("darkcyan", -16741493);
            hashMap.put("darkgoldenrod", -4684277);
            hashMap.put("darkgray", -5658199);
            hashMap.put("darkgreen", -16751616);
            hashMap.put("darkgrey", -5658199);
            hashMap.put("darkkhaki", -4343957);
            hashMap.put("darkmagenta", -7667573);
            hashMap.put("darkolivegreen", -11179217);
            hashMap.put("darkorange", -29696);
            hashMap.put("darkorchid", -6737204);
            hashMap.put("darkred", -7667712);
            hashMap.put("darksalmon", -1468806);
            hashMap.put("darkseagreen", -7357297);
            hashMap.put("darkslateblue", -12042869);
            hashMap.put("darkslategray", -13676721);
            hashMap.put("darkslategrey", -13676721);
            hashMap.put("darkturquoise", -16724271);
            hashMap.put("darkviolet", -7077677);
            hashMap.put("deeppink", -60269);
            hashMap.put("deepskyblue", -16728065);
            hashMap.put("dimgray", -9868951);
            hashMap.put("dimgrey", -9868951);
            hashMap.put("dodgerblue", -14774017);
            hashMap.put("firebrick", -5103070);
            hashMap.put("floralwhite", -1296);
            hashMap.put("forestgreen", -14513374);
            hashMap.put("fuchsia", -65281);
            hashMap.put("gainsboro", -2302756);
            hashMap.put("ghostwhite", -460545);
            hashMap.put("gold", -10496);
            hashMap.put("goldenrod", -2448096);
            hashMap.put("gray", -8355712);
            hashMap.put("green", -16744448);
            hashMap.put("greenyellow", -5374161);
            hashMap.put("grey", -8355712);
            hashMap.put("honeydew", -983056);
            hashMap.put("hotpink", -38476);
            hashMap.put("indianred", -3318692);
            hashMap.put("indigo", -11861886);
            hashMap.put("ivory", -16);
            hashMap.put("khaki", -989556);
            hashMap.put("lavender", -1644806);
            hashMap.put("lavenderblush", -3851);
            hashMap.put("lawngreen", -8586240);
            hashMap.put("lemonchiffon", -1331);
            hashMap.put("lightblue", -5383962);
            hashMap.put("lightcoral", -1015680);
            hashMap.put("lightcyan", -2031617);
            hashMap.put("lightgoldenrodyellow", -329006);
            hashMap.put("lightgray", -2894893);
            hashMap.put("lightgreen", -7278960);
            hashMap.put("lightgrey", -2894893);
            hashMap.put("lightpink", -18751);
            hashMap.put("lightsalmon", -24454);
            hashMap.put("lightseagreen", -14634326);
            hashMap.put("lightskyblue", -7876870);
            hashMap.put("lightslategray", -8943463);
            hashMap.put("lightslategrey", -8943463);
            hashMap.put("lightsteelblue", -5192482);
            hashMap.put("lightyellow", -32);
            hashMap.put("lime", -16711936);
            hashMap.put("limegreen", -13447886);
            hashMap.put("linen", -331546);
            hashMap.put("magenta", -65281);
            hashMap.put("maroon", -8388608);
            hashMap.put("mediumaquamarine", -10039894);
            hashMap.put("mediumblue", -16777011);
            hashMap.put("mediumorchid", -4565549);
            hashMap.put("mediumpurple", -7114533);
            hashMap.put("mediumseagreen", -12799119);
            hashMap.put("mediumslateblue", -8689426);
            hashMap.put("mediumspringgreen", -16713062);
            hashMap.put("mediumturquoise", -12004916);
            hashMap.put("mediumvioletred", -3730043);
            hashMap.put("midnightblue", -15132304);
            hashMap.put("mintcream", -655366);
            hashMap.put("mistyrose", -6943);
            hashMap.put("moccasin", -6987);
            hashMap.put("navajowhite", -8531);
            hashMap.put("navy", -16777088);
            hashMap.put("oldlace", -133658);
            hashMap.put("olive", -8355840);
            hashMap.put("olivedrab", -9728477);
            hashMap.put("orange", -23296);
            hashMap.put("orangered", -47872);
            hashMap.put("orchid", -2461482);
            hashMap.put("palegoldenrod", -1120086);
            hashMap.put("palegreen", -6751336);
            hashMap.put("paleturquoise", -5247250);
            hashMap.put("palevioletred", -2396013);
            hashMap.put("papayawhip", -4139);
            hashMap.put("peachpuff", -9543);
            hashMap.put("peru", -3308225);
            hashMap.put("pink", -16181);
            hashMap.put("plum", -2252579);
            hashMap.put("powderblue", -5185306);
            hashMap.put("purple", -8388480);
            hashMap.put("rebeccapurple", -10079335);
            hashMap.put("red", -65536);
            hashMap.put("rosybrown", -4419697);
            hashMap.put("royalblue", -12490271);
            hashMap.put("saddlebrown", -7650029);
            hashMap.put("salmon", -360334);
            hashMap.put("sandybrown", -744352);
            hashMap.put("seagreen", -13726889);
            hashMap.put("seashell", -2578);
            hashMap.put("sienna", -6270419);
            hashMap.put("silver", -4144960);
            hashMap.put("skyblue", -7876885);
            hashMap.put("slateblue", -9807155);
            hashMap.put("slategray", -9404272);
            hashMap.put("slategrey", -9404272);
            hashMap.put("snow", -1286);
            hashMap.put("springgreen", -16711809);
            hashMap.put("steelblue", -12156236);
            hashMap.put("tan", -2968436);
            hashMap.put("teal", -16744320);
            hashMap.put("thistle", -2572328);
            hashMap.put("tomato", -40121);
            hashMap.put("turquoise", -12525360);
            hashMap.put("violet", -1146130);
            hashMap.put("wheat", -663885);
            hashMap.put("white", -1);
            hashMap.put("whitesmoke", -657931);
            hashMap.put("yellow", -256);
            hashMap.put("yellowgreen", -6632142);
            hashMap.put("transparent", 0);
        }

        static Integer a(String str) {
            return (Integer) f22594a.get(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final Map f22595a;

        static {
            HashMap hashMap = new HashMap(9);
            f22595a = hashMap;
            g.d1 d1Var = g.d1.pt;
            hashMap.put("xx-small", new g.p(0.694f, d1Var));
            hashMap.put("x-small", new g.p(0.833f, d1Var));
            hashMap.put("small", new g.p(10.0f, d1Var));
            hashMap.put("medium", new g.p(12.0f, d1Var));
            hashMap.put("large", new g.p(14.4f, d1Var));
            hashMap.put("x-large", new g.p(17.3f, d1Var));
            hashMap.put("xx-large", new g.p(20.7f, d1Var));
            g.d1 d1Var2 = g.d1.percent;
            hashMap.put("smaller", new g.p(83.33f, d1Var2));
            hashMap.put("larger", new g.p(120.0f, d1Var2));
        }

        static g.p a(String str) {
            return (g.p) f22595a.get(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        private static final Map f22596a;

        static {
            HashMap hashMap = new HashMap(13);
            f22596a = hashMap;
            Integer valueOf = Integer.valueOf((int) ReactFontManager.TypefaceStyle.NORMAL);
            hashMap.put("normal", valueOf);
            Integer valueOf2 = Integer.valueOf((int) ReactFontManager.TypefaceStyle.BOLD);
            hashMap.put("bold", valueOf2);
            hashMap.put("bolder", 1);
            hashMap.put("lighter", -1);
            hashMap.put("100", 100);
            hashMap.put("200", Integer.valueOf((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION));
            hashMap.put("300", Integer.valueOf((int) ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS));
            hashMap.put("400", valueOf);
            hashMap.put("500", 500);
            hashMap.put("600", 600);
            hashMap.put("700", valueOf2);
            hashMap.put("800", 800);
            hashMap.put("900", 900);
        }

        static Integer a(String str) {
            return (Integer) f22596a.get(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f extends DefaultHandler2 {
        private f() {
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void characters(char[] cArr, int i10, int i11) {
            k.this.c1(new String(cArr, i10, i11));
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void endDocument() {
            k.this.o();
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void endElement(String str, String str2, String str3) {
            k.this.p(str, str2, str3);
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void processingInstruction(String str, String str2) {
            k.this.r(str, k.this.x0(new i(str2)));
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void startDocument() {
            k.this.W0();
        }

        @Override // org.xml.sax.helpers.DefaultHandler, org.xml.sax.ContentHandler
        public void startElement(String str, String str2, String str3, Attributes attributes) {
            k.this.X0(str, str2, str3, attributes);
        }

        /* synthetic */ f(k kVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum g {
        CLASS,
        clip,
        clip_path,
        clipPathUnits,
        clip_rule,
        color,
        cx,
        cy,
        direction,
        dx,
        dy,
        fx,
        fy,
        d,
        display,
        fill,
        fill_rule,
        fill_opacity,
        font,
        font_family,
        font_size,
        font_weight,
        font_style,
        gradientTransform,
        gradientUnits,
        height,
        href,
        image_rendering,
        marker,
        marker_start,
        marker_mid,
        marker_end,
        markerHeight,
        markerUnits,
        markerWidth,
        mask,
        maskContentUnits,
        maskUnits,
        media,
        offset,
        opacity,
        orient,
        overflow,
        pathLength,
        patternContentUnits,
        patternTransform,
        patternUnits,
        points,
        preserveAspectRatio,
        r,
        refX,
        refY,
        requiredFeatures,
        requiredExtensions,
        requiredFormats,
        requiredFonts,
        rx,
        ry,
        solid_color,
        solid_opacity,
        spreadMethod,
        startOffset,
        stop_color,
        stop_opacity,
        stroke,
        stroke_dasharray,
        stroke_dashoffset,
        stroke_linecap,
        stroke_linejoin,
        stroke_miterlimit,
        stroke_opacity,
        stroke_width,
        style,
        systemLanguage,
        text_anchor,
        text_decoration,
        transform,
        type,
        vector_effect,
        version,
        viewBox,
        width,
        x,
        y,
        x1,
        y1,
        x2,
        y2,
        viewport_fill,
        viewport_fill_opacity,
        visibility,
        UNSUPPORTED;
        
        private static final Map Z0 = new HashMap();

        static {
            g[] values;
            for (g gVar : values()) {
                if (gVar == CLASS) {
                    Z0.put("class", gVar);
                } else if (gVar != UNSUPPORTED) {
                    Z0.put(gVar.name().replace('_', '-'), gVar);
                }
            }
        }

        public static g a(String str) {
            g gVar = (g) Z0.get(str);
            if (gVar != null) {
                return gVar;
            }
            return UNSUPPORTED;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum h {
        svg,
        a,
        circle,
        clipPath,
        defs,
        desc,
        ellipse,
        g,
        image,
        line,
        linearGradient,
        marker,
        mask,
        path,
        pattern,
        polygon,
        polyline,
        radialGradient,
        rect,
        solidColor,
        stop,
        style,
        SWITCH,
        symbol,
        text,
        textPath,
        title,
        tref,
        tspan,
        use,
        view,
        UNSUPPORTED;
        
        private static final Map R = new HashMap();

        static {
            h[] values;
            for (h hVar : values()) {
                if (hVar == SWITCH) {
                    R.put("switch", hVar);
                } else if (hVar != UNSUPPORTED) {
                    R.put(hVar.name(), hVar);
                }
            }
        }

        public static h a(String str) {
            h hVar = (h) R.get(str);
            if (hVar != null) {
                return hVar;
            }
            return UNSUPPORTED;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        String f22655a;

        /* renamed from: c  reason: collision with root package name */
        int f22657c;

        /* renamed from: b  reason: collision with root package name */
        int f22656b = 0;

        /* renamed from: d  reason: collision with root package name */
        private f6.d f22658d = new f6.d();

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(String str) {
            this.f22657c = 0;
            String trim = str.trim();
            this.f22655a = trim;
            this.f22657c = trim.length();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void A() {
            while (true) {
                int i10 = this.f22656b;
                if (i10 < this.f22657c && k(this.f22655a.charAt(i10))) {
                    this.f22656b++;
                } else {
                    return;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public int a() {
            int i10 = this.f22656b;
            int i11 = this.f22657c;
            if (i10 == i11) {
                return -1;
            }
            int i12 = i10 + 1;
            this.f22656b = i12;
            if (i12 >= i11) {
                return -1;
            }
            return this.f22655a.charAt(i12);
        }

        String b() {
            int i10 = this.f22656b;
            while (!h() && !k(this.f22655a.charAt(this.f22656b))) {
                this.f22656b++;
            }
            String substring = this.f22655a.substring(i10, this.f22656b);
            this.f22656b = i10;
            return substring;
        }

        Boolean c(Object obj) {
            if (obj == null) {
                return null;
            }
            z();
            return m();
        }

        float d(float f10) {
            if (Float.isNaN(f10)) {
                return Float.NaN;
            }
            z();
            return n();
        }

        float e(Boolean bool) {
            if (bool == null) {
                return Float.NaN;
            }
            z();
            return n();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean f(char c10) {
            boolean z10;
            int i10 = this.f22656b;
            if (i10 < this.f22657c && this.f22655a.charAt(i10) == c10) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f22656b++;
            }
            return z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean g(String str) {
            boolean z10;
            int length = str.length();
            int i10 = this.f22656b;
            if (i10 <= this.f22657c - length && this.f22655a.substring(i10, i10 + length).equals(str)) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f22656b += length;
            }
            return z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean h() {
            if (this.f22656b == this.f22657c) {
                return true;
            }
            return false;
        }

        boolean i() {
            int i10 = this.f22656b;
            if (i10 == this.f22657c) {
                return false;
            }
            char charAt = this.f22655a.charAt(i10);
            if (charAt < 'a' || charAt > 'z') {
                if (charAt < 'A' || charAt > 'Z') {
                    return false;
                }
                return true;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean j(int i10) {
            if (i10 != 10 && i10 != 13) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean k(int i10) {
            if (i10 != 32 && i10 != 10 && i10 != 13 && i10 != 9) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public Integer l() {
            int i10 = this.f22656b;
            if (i10 == this.f22657c) {
                return null;
            }
            String str = this.f22655a;
            this.f22656b = i10 + 1;
            return Integer.valueOf(str.charAt(i10));
        }

        Boolean m() {
            int i10 = this.f22656b;
            if (i10 == this.f22657c) {
                return null;
            }
            char charAt = this.f22655a.charAt(i10);
            if (charAt != '0' && charAt != '1') {
                return null;
            }
            boolean z10 = true;
            this.f22656b++;
            if (charAt != '1') {
                z10 = false;
            }
            return Boolean.valueOf(z10);
        }

        float n() {
            float b10 = this.f22658d.b(this.f22655a, this.f22656b, this.f22657c);
            if (!Float.isNaN(b10)) {
                this.f22656b = this.f22658d.a();
            }
            return b10;
        }

        String o() {
            if (h()) {
                return null;
            }
            int i10 = this.f22656b;
            int charAt = this.f22655a.charAt(i10);
            while (true) {
                if ((charAt < 97 || charAt > 122) && (charAt < 65 || charAt > 90)) {
                    break;
                }
                charAt = a();
            }
            int i11 = this.f22656b;
            while (k(charAt)) {
                charAt = a();
            }
            if (charAt == 40) {
                this.f22656b++;
                return this.f22655a.substring(i10, i11);
            }
            this.f22656b = i10;
            return null;
        }

        g.p p() {
            float n10 = n();
            if (Float.isNaN(n10)) {
                return null;
            }
            g.d1 v10 = v();
            if (v10 == null) {
                return new g.p(n10, g.d1.px);
            }
            return new g.p(n10, v10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public String q() {
            if (h()) {
                return null;
            }
            int i10 = this.f22656b;
            char charAt = this.f22655a.charAt(i10);
            if (charAt != '\'' && charAt != '\"') {
                return null;
            }
            int a10 = a();
            while (a10 != -1 && a10 != charAt) {
                a10 = a();
            }
            if (a10 == -1) {
                this.f22656b = i10;
                return null;
            }
            int i11 = this.f22656b;
            this.f22656b = i11 + 1;
            return this.f22655a.substring(i10 + 1, i11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public String r() {
            return t(' ', false);
        }

        String s(char c10) {
            return t(c10, false);
        }

        String t(char c10, boolean z10) {
            if (h()) {
                return null;
            }
            char charAt = this.f22655a.charAt(this.f22656b);
            if ((!z10 && k(charAt)) || charAt == c10) {
                return null;
            }
            int i10 = this.f22656b;
            int a10 = a();
            while (a10 != -1 && a10 != c10 && (z10 || !k(a10))) {
                a10 = a();
            }
            return this.f22655a.substring(i10, this.f22656b);
        }

        String u(char c10) {
            return t(c10, true);
        }

        g.d1 v() {
            if (h()) {
                return null;
            }
            if (this.f22655a.charAt(this.f22656b) == '%') {
                this.f22656b++;
                return g.d1.percent;
            }
            int i10 = this.f22656b;
            if (i10 > this.f22657c - 2) {
                return null;
            }
            try {
                g.d1 valueOf = g.d1.valueOf(this.f22655a.substring(i10, i10 + 2).toLowerCase(Locale.US));
                this.f22656b += 2;
                return valueOf;
            } catch (IllegalArgumentException unused) {
                return null;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public String w() {
            if (h()) {
                return null;
            }
            int i10 = this.f22656b;
            char charAt = this.f22655a.charAt(i10);
            if ((charAt >= 'A' && charAt <= 'Z') || (charAt >= 'a' && charAt <= 'z')) {
                int a10 = a();
                while (true) {
                    if ((a10 < 65 || a10 > 90) && (a10 < 97 || a10 > 122)) {
                        break;
                    }
                    a10 = a();
                }
                return this.f22655a.substring(i10, this.f22656b);
            }
            this.f22656b = i10;
            return null;
        }

        float x() {
            z();
            float b10 = this.f22658d.b(this.f22655a, this.f22656b, this.f22657c);
            if (!Float.isNaN(b10)) {
                this.f22656b = this.f22658d.a();
            }
            return b10;
        }

        String y() {
            if (h()) {
                return null;
            }
            int i10 = this.f22656b;
            this.f22656b = this.f22657c;
            return this.f22655a.substring(i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean z() {
            A();
            int i10 = this.f22656b;
            if (i10 == this.f22657c || this.f22655a.charAt(i10) != ',') {
                return false;
            }
            this.f22656b++;
            A();
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class j implements Attributes {

        /* renamed from: a  reason: collision with root package name */
        private XmlPullParser f22659a;

        public j(XmlPullParser xmlPullParser) {
            this.f22659a = xmlPullParser;
        }

        @Override // org.xml.sax.Attributes
        public int getIndex(String str, String str2) {
            return -1;
        }

        @Override // org.xml.sax.Attributes
        public int getLength() {
            return this.f22659a.getAttributeCount();
        }

        @Override // org.xml.sax.Attributes
        public String getLocalName(int i10) {
            return this.f22659a.getAttributeName(i10);
        }

        @Override // org.xml.sax.Attributes
        public String getQName(int i10) {
            String attributeName = this.f22659a.getAttributeName(i10);
            if (this.f22659a.getAttributePrefix(i10) != null) {
                return this.f22659a.getAttributePrefix(i10) + ':' + attributeName;
            }
            return attributeName;
        }

        @Override // org.xml.sax.Attributes
        public String getType(int i10) {
            return null;
        }

        @Override // org.xml.sax.Attributes
        public String getURI(int i10) {
            return this.f22659a.getAttributeNamespace(i10);
        }

        @Override // org.xml.sax.Attributes
        public String getValue(int i10) {
            return this.f22659a.getAttributeValue(i10);
        }

        @Override // org.xml.sax.Attributes
        public int getIndex(String str) {
            return -1;
        }

        @Override // org.xml.sax.Attributes
        public String getType(String str, String str2) {
            return null;
        }

        @Override // org.xml.sax.Attributes
        public String getValue(String str, String str2) {
            return null;
        }

        @Override // org.xml.sax.Attributes
        public String getType(String str) {
            return null;
        }

        @Override // org.xml.sax.Attributes
        public String getValue(String str) {
            return null;
        }
    }

    private void A(g.d dVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case 12:
                    dVar.f22354o = o0(trim);
                    break;
                case 13:
                    dVar.f22355p = o0(trim);
                    break;
                case 14:
                    g.p o02 = o0(trim);
                    dVar.f22356q = o02;
                    if (o02.g()) {
                        throw new f6.j("Invalid <circle> element. r cannot be negative");
                    }
                    break;
            }
        }
    }

    private static Set A0(String str) {
        i iVar = new i(str);
        HashSet hashSet = new HashSet();
        while (!iVar.h()) {
            hashSet.add(iVar.r());
            iVar.A();
        }
        return hashSet;
    }

    private void B(g.e eVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            if (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()] == 38) {
                if ("objectBoundingBox".equals(trim)) {
                    eVar.f22368p = Boolean.FALSE;
                } else if ("userSpaceOnUse".equals(trim)) {
                    eVar.f22368p = Boolean.TRUE;
                } else {
                    throw new f6.j("Invalid value for attribute clipPathUnits");
                }
            }
        }
    }

    private static g.p[] B0(String str) {
        g.p p10;
        i iVar = new i(str);
        iVar.A();
        if (iVar.h() || (p10 = iVar.p()) == null || p10.g()) {
            return null;
        }
        float a10 = p10.a();
        ArrayList arrayList = new ArrayList();
        arrayList.add(p10);
        while (!iVar.h()) {
            iVar.z();
            g.p p11 = iVar.p();
            if (p11 == null || p11.g()) {
                return null;
            }
            arrayList.add(p11);
            a10 += p11.a();
        }
        if (a10 == 0.0f) {
            return null;
        }
        return (g.p[]) arrayList.toArray(new g.p[arrayList.size()]);
    }

    private void C(g.g0 g0Var, Attributes attributes) {
        HashSet hashSet;
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    g0Var.e(z0(trim));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    g0Var.j(trim);
                    break;
                case 23:
                    g0Var.h(F0(trim));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    g0Var.i(A0(trim));
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    List i02 = i0(trim);
                    if (i02 != null) {
                        hashSet = new HashSet(i02);
                    } else {
                        hashSet = new HashSet(0);
                    }
                    g0Var.c(hashSet);
                    break;
            }
        }
    }

    private static g.e0.c C0(String str) {
        if ("butt".equals(str)) {
            return g.e0.c.Butt;
        }
        if ("round".equals(str)) {
            return g.e0.c.Round;
        }
        if ("square".equals(str)) {
            return g.e0.c.Square;
        }
        return null;
    }

    private void D(g.l0 l0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String qName = attributes.getQName(i10);
            if (!qName.equals(StackTraceHelper.ID_KEY) && !qName.equals("xml:id")) {
                if (qName.equals("xml:space")) {
                    String trim = attributes.getValue(i10).trim();
                    if ("default".equals(trim)) {
                        l0Var.f22460d = Boolean.FALSE;
                        return;
                    } else if ("preserve".equals(trim)) {
                        l0Var.f22460d = Boolean.TRUE;
                        return;
                    } else {
                        throw new f6.j("Invalid value for \"xml:space\" attribute: " + trim);
                    }
                }
            } else {
                l0Var.f22459c = attributes.getValue(i10).trim();
                return;
            }
        }
    }

    private static g.e0.d D0(String str) {
        if ("miter".equals(str)) {
            return g.e0.d.Miter;
        }
        if ("round".equals(str)) {
            return g.e0.d.Round;
        }
        if ("bevel".equals(str)) {
            return g.e0.d.Bevel;
        }
        return null;
    }

    private void E(g.i iVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case 10:
                    g.p o02 = o0(trim);
                    iVar.f22441q = o02;
                    if (o02.g()) {
                        throw new f6.j("Invalid <ellipse> element. rx cannot be negative");
                    }
                    break;
                case 11:
                    g.p o03 = o0(trim);
                    iVar.f22442r = o03;
                    if (o03.g()) {
                        throw new f6.j("Invalid <ellipse> element. ry cannot be negative");
                    }
                    break;
                case 12:
                    iVar.f22439o = o0(trim);
                    break;
                case 13:
                    iVar.f22440p = o0(trim);
                    break;
            }
        }
    }

    private static void E0(g.l0 l0Var, String str) {
        i iVar = new i(str.replaceAll("/\\*.*?\\*/", ""));
        while (true) {
            String s10 = iVar.s(':');
            iVar.A();
            if (iVar.f(':')) {
                iVar.A();
                String u10 = iVar.u(';');
                if (u10 == null) {
                    return;
                }
                iVar.A();
                if (iVar.h() || iVar.f(';')) {
                    if (l0Var.f22462f == null) {
                        l0Var.f22462f = new g.e0();
                    }
                    S0(l0Var.f22462f, s10, u10);
                    iVar.A();
                }
            } else {
                return;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:38:0x008c, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void F(f6.g.j r5, org.xml.sax.Attributes r6) {
        /*
            r4 = this;
            r0 = 0
        L1:
            int r1 = r6.getLength()
            if (r0 >= r1) goto L90
            java.lang.String r1 = r6.getValue(r0)
            java.lang.String r1 = r1.trim()
            int[] r2 = f6.k.a.f22592b
            java.lang.String r3 = r6.getLocalName(r0)
            f6.k$g r3 = f6.k.g.a(r3)
            int r3 = r3.ordinal()
            r2 = r2[r3]
            r3 = 6
            if (r2 == r3) goto L72
            switch(r2) {
                case 32: goto L50;
                case 33: goto L49;
                case 34: goto L26;
                default: goto L25;
            }
        L25:
            goto L8c
        L26:
            f6.g$k r2 = f6.g.k.valueOf(r1)     // Catch: java.lang.IllegalArgumentException -> L2d
            r5.f22451k = r2     // Catch: java.lang.IllegalArgumentException -> L2d
            goto L8c
        L2d:
            f6.j r5 = new f6.j
            java.lang.StringBuilder r6 = new java.lang.StringBuilder
            r6.<init>()
            java.lang.String r0 = "Invalid spreadMethod attribute. \""
            r6.append(r0)
            r6.append(r1)
            java.lang.String r0 = "\" is not a valid value."
            r6.append(r0)
            java.lang.String r6 = r6.toString()
            r5.<init>(r6)
            throw r5
        L49:
            android.graphics.Matrix r1 = r4.J0(r1)
            r5.f22450j = r1
            goto L8c
        L50:
            java.lang.String r2 = "objectBoundingBox"
            boolean r2 = r2.equals(r1)
            if (r2 == 0) goto L5d
            java.lang.Boolean r1 = java.lang.Boolean.FALSE
            r5.f22449i = r1
            goto L8c
        L5d:
            java.lang.String r2 = "userSpaceOnUse"
            boolean r1 = r2.equals(r1)
            if (r1 == 0) goto L6a
            java.lang.Boolean r1 = java.lang.Boolean.TRUE
            r5.f22449i = r1
            goto L8c
        L6a:
            f6.j r5 = new f6.j
            java.lang.String r6 = "Invalid value for attribute gradientUnits"
            r5.<init>(r6)
            throw r5
        L72:
            java.lang.String r2 = ""
            java.lang.String r3 = r6.getURI(r0)
            boolean r2 = r2.equals(r3)
            if (r2 != 0) goto L8a
            java.lang.String r2 = "http://www.w3.org/1999/xlink"
            java.lang.String r3 = r6.getURI(r0)
            boolean r2 = r2.equals(r3)
            if (r2 == 0) goto L8c
        L8a:
            r5.f22452l = r1
        L8c:
            int r0 = r0 + 1
            goto L1
        L90:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.k.F(f6.g$j, org.xml.sax.Attributes):void");
    }

    private static Set F0(String str) {
        i iVar = new i(str);
        HashSet hashSet = new HashSet();
        while (!iVar.h()) {
            String r10 = iVar.r();
            int indexOf = r10.indexOf(45);
            if (indexOf != -1) {
                r10 = r10.substring(0, indexOf);
            }
            hashSet.add(new Locale(r10, "", "").getLanguage());
            iVar.A();
        }
        return hashSet;
    }

    private void G(g.o oVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 6) {
                                if (i11 == 7) {
                                    w0(oVar, trim);
                                }
                            } else if ("".equals(attributes.getURI(i10)) || "http://www.w3.org/1999/xlink".equals(attributes.getURI(i10))) {
                                oVar.f22471p = trim;
                            }
                        } else {
                            g.p o02 = o0(trim);
                            oVar.f22475t = o02;
                            if (o02.g()) {
                                throw new f6.j("Invalid <use> element. height cannot be negative");
                            }
                        }
                    } else {
                        g.p o03 = o0(trim);
                        oVar.f22474s = o03;
                        if (o03.g()) {
                            throw new f6.j("Invalid <use> element. width cannot be negative");
                        }
                    }
                } else {
                    oVar.f22473r = o0(trim);
                }
            } else {
                oVar.f22472q = o0(trim);
            }
        }
    }

    private static g.e0.f G0(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1074341483:
                if (str.equals("middle")) {
                    c10 = 0;
                    break;
                }
                break;
            case 100571:
                if (str.equals(ViewProps.END)) {
                    c10 = 1;
                    break;
                }
                break;
            case 109757538:
                if (str.equals(ViewProps.START)) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return g.e0.f.Middle;
            case 1:
                return g.e0.f.End;
            case 2:
                return g.e0.f.Start;
            default:
                return null;
        }
    }

    private void H(g.q qVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case 15:
                    qVar.f22480o = o0(trim);
                    break;
                case 16:
                    qVar.f22481p = o0(trim);
                    break;
                case 17:
                    qVar.f22482q = o0(trim);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    qVar.f22483r = o0(trim);
                    break;
            }
        }
    }

    private static g.e0.EnumC0308g H0(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1171789332:
                if (str.equals("line-through")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1026963764:
                if (str.equals("underline")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3387192:
                if (str.equals(ViewProps.NONE)) {
                    c10 = 2;
                    break;
                }
                break;
            case 93826908:
                if (str.equals("blink")) {
                    c10 = 3;
                    break;
                }
                break;
            case 529818312:
                if (str.equals("overline")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return g.e0.EnumC0308g.LineThrough;
            case 1:
                return g.e0.EnumC0308g.Underline;
            case 2:
                return g.e0.EnumC0308g.None;
            case 3:
                return g.e0.EnumC0308g.Blink;
            case 4:
                return g.e0.EnumC0308g.Overline;
            default:
                return null;
        }
    }

    private void I(g.m0 m0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case 15:
                    m0Var.f22465m = o0(trim);
                    break;
                case 16:
                    m0Var.f22466n = o0(trim);
                    break;
                case 17:
                    m0Var.f22467o = o0(trim);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    m0Var.f22468p = o0(trim);
                    break;
            }
        }
    }

    private static g.e0.h I0(String str) {
        str.getClass();
        if (!str.equals("ltr")) {
            if (!str.equals("rtl")) {
                return null;
            }
            return g.e0.h.RTL;
        }
        return g.e0.h.LTR;
    }

    private void J(g.r rVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            switch (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()]) {
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    rVar.f22490r = o0(trim);
                    break;
                case 27:
                    rVar.f22491s = o0(trim);
                    break;
                case 28:
                    g.p o02 = o0(trim);
                    rVar.f22492t = o02;
                    if (o02.g()) {
                        throw new f6.j("Invalid <marker> element. markerWidth cannot be negative");
                    }
                    break;
                case 29:
                    g.p o03 = o0(trim);
                    rVar.f22493u = o03;
                    if (o03.g()) {
                        throw new f6.j("Invalid <marker> element. markerHeight cannot be negative");
                    }
                    break;
                case 30:
                    if ("strokeWidth".equals(trim)) {
                        rVar.f22489q = false;
                        break;
                    } else if ("userSpaceOnUse".equals(trim)) {
                        rVar.f22489q = true;
                        break;
                    } else {
                        throw new f6.j("Invalid value for attribute markerUnits");
                    }
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    if ("auto".equals(trim)) {
                        rVar.f22494v = Float.valueOf(Float.NaN);
                        break;
                    } else {
                        rVar.f22494v = Float.valueOf(f0(trim));
                        break;
                    }
            }
        }
    }

    private Matrix J0(String str) {
        Matrix matrix = new Matrix();
        i iVar = new i(str);
        iVar.A();
        while (!iVar.h()) {
            String o10 = iVar.o();
            if (o10 != null) {
                char c10 = 65535;
                switch (o10.hashCode()) {
                    case -1081239615:
                        if (o10.equals("matrix")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -925180581:
                        if (o10.equals("rotate")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 109250890:
                        if (o10.equals("scale")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 109493390:
                        if (o10.equals("skewX")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 109493391:
                        if (o10.equals("skewY")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1052832078:
                        if (o10.equals("translate")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.A();
                        float n10 = iVar.n();
                        iVar.z();
                        float n11 = iVar.n();
                        iVar.z();
                        float n12 = iVar.n();
                        iVar.z();
                        float n13 = iVar.n();
                        iVar.z();
                        float n14 = iVar.n();
                        iVar.z();
                        float n15 = iVar.n();
                        iVar.A();
                        if (!Float.isNaN(n15) && iVar.f(')')) {
                            Matrix matrix2 = new Matrix();
                            matrix2.setValues(new float[]{n10, n12, n14, n11, n13, n15, 0.0f, 0.0f, 1.0f});
                            matrix.preConcat(matrix2);
                            break;
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                        break;
                    case 1:
                        iVar.A();
                        float n16 = iVar.n();
                        float x10 = iVar.x();
                        float x11 = iVar.x();
                        iVar.A();
                        if (!Float.isNaN(n16) && iVar.f(')')) {
                            if (Float.isNaN(x10)) {
                                matrix.preRotate(n16);
                                break;
                            } else if (!Float.isNaN(x11)) {
                                matrix.preRotate(n16, x10, x11);
                                break;
                            } else {
                                throw new f6.j("Invalid transform list: " + str);
                            }
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                    case 2:
                        iVar.A();
                        float n17 = iVar.n();
                        float x12 = iVar.x();
                        iVar.A();
                        if (!Float.isNaN(n17) && iVar.f(')')) {
                            if (Float.isNaN(x12)) {
                                matrix.preScale(n17, n17);
                                break;
                            } else {
                                matrix.preScale(n17, x12);
                                break;
                            }
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                        break;
                    case 3:
                        iVar.A();
                        float n18 = iVar.n();
                        iVar.A();
                        if (!Float.isNaN(n18) && iVar.f(')')) {
                            matrix.preSkew((float) Math.tan(Math.toRadians(n18)), 0.0f);
                            break;
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                        break;
                    case 4:
                        iVar.A();
                        float n19 = iVar.n();
                        iVar.A();
                        if (!Float.isNaN(n19) && iVar.f(')')) {
                            matrix.preSkew(0.0f, (float) Math.tan(Math.toRadians(n19)));
                            break;
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                    case 5:
                        iVar.A();
                        float n20 = iVar.n();
                        float x13 = iVar.x();
                        iVar.A();
                        if (!Float.isNaN(n20) && iVar.f(')')) {
                            if (Float.isNaN(x13)) {
                                matrix.preTranslate(n20, 0.0f);
                                break;
                            } else {
                                matrix.preTranslate(n20, x13);
                                break;
                            }
                        } else {
                            throw new f6.j("Invalid transform list: " + str);
                        }
                        break;
                    default:
                        throw new f6.j("Invalid transform list fn: " + o10 + ")");
                }
                if (!iVar.h()) {
                    iVar.z();
                } else {
                    return matrix;
                }
            } else {
                throw new f6.j("Bad transform function encountered in transform list: " + str);
            }
        }
        return matrix;
    }

    private void K(g.s sVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 43) {
                                if (i11 != 44) {
                                    continue;
                                } else if ("objectBoundingBox".equals(trim)) {
                                    sVar.f22497p = Boolean.FALSE;
                                } else if ("userSpaceOnUse".equals(trim)) {
                                    sVar.f22497p = Boolean.TRUE;
                                } else {
                                    throw new f6.j("Invalid value for attribute maskContentUnits");
                                }
                            } else if ("objectBoundingBox".equals(trim)) {
                                sVar.f22496o = Boolean.FALSE;
                            } else if ("userSpaceOnUse".equals(trim)) {
                                sVar.f22496o = Boolean.TRUE;
                            } else {
                                throw new f6.j("Invalid value for attribute maskUnits");
                            }
                        } else {
                            g.p o02 = o0(trim);
                            sVar.f22501t = o02;
                            if (o02.g()) {
                                throw new f6.j("Invalid <mask> element. height cannot be negative");
                            }
                        }
                    } else {
                        g.p o03 = o0(trim);
                        sVar.f22500s = o03;
                        if (o03.g()) {
                            throw new f6.j("Invalid <mask> element. width cannot be negative");
                        }
                    }
                } else {
                    sVar.f22499r = o0(trim);
                }
            } else {
                sVar.f22498q = o0(trim);
            }
        }
    }

    private void K0(InputStream inputStream) {
        Log.d("SVGParser", "Falling back to SAX parser");
        try {
            SAXParserFactory newInstance = SAXParserFactory.newInstance();
            newInstance.setFeature("http://xml.org/sax/features/external-general-entities", false);
            newInstance.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
            XMLReader xMLReader = newInstance.newSAXParser().getXMLReader();
            f fVar = new f(this, null);
            xMLReader.setContentHandler(fVar);
            xMLReader.setProperty("http://xml.org/sax/properties/lexical-handler", fVar);
            xMLReader.parse(new InputSource(inputStream));
        } catch (IOException e10) {
            throw new f6.j("Stream error", e10);
        } catch (ParserConfigurationException e11) {
            throw new f6.j("XML parser problem", e11);
        } catch (SAXException e12) {
            throw new f6.j("SVG parse error", e12);
        }
    }

    private void L(g.v vVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 8) {
                if (i11 != 9) {
                    continue;
                } else {
                    Float valueOf = Float.valueOf(f0(trim));
                    vVar.f22507p = valueOf;
                    if (valueOf.floatValue() < 0.0f) {
                        throw new f6.j("Invalid <path> element. pathLength cannot be negative");
                    }
                }
            } else {
                vVar.f22506o = u0(trim);
            }
        }
    }

    private void L0(InputStream inputStream, boolean z10) {
        try {
            try {
                XmlPullParser newPullParser = Xml.newPullParser();
                j jVar = new j(newPullParser);
                newPullParser.setFeature("http://xmlpull.org/v1/doc/features.html#process-docdecl", false);
                newPullParser.setFeature("http://xmlpull.org/v1/doc/features.html#process-namespaces", true);
                newPullParser.setInput(inputStream, null);
                for (int eventType = newPullParser.getEventType(); eventType != 1; eventType = newPullParser.nextToken()) {
                    if (eventType != 0) {
                        if (eventType != 8) {
                            if (eventType != 10) {
                                if (eventType != 2) {
                                    if (eventType != 3) {
                                        if (eventType != 4) {
                                            if (eventType == 5) {
                                                c1(newPullParser.getText());
                                            }
                                        } else {
                                            int[] iArr = new int[2];
                                            e1(newPullParser.getTextCharacters(iArr), iArr[0], iArr[1]);
                                        }
                                    } else {
                                        String name = newPullParser.getName();
                                        if (newPullParser.getPrefix() != null) {
                                            name = newPullParser.getPrefix() + ':' + name;
                                        }
                                        p(newPullParser.getNamespace(), newPullParser.getName(), name);
                                    }
                                } else {
                                    String name2 = newPullParser.getName();
                                    if (newPullParser.getPrefix() != null) {
                                        name2 = newPullParser.getPrefix() + ':' + name2;
                                    }
                                    X0(newPullParser.getNamespace(), newPullParser.getName(), name2, jVar);
                                }
                            } else if (z10 && this.f22582a.m() == null && newPullParser.getText().contains("<!ENTITY ")) {
                                try {
                                    Log.d("SVGParser", "Switching to SAX parser to process entities");
                                    inputStream.reset();
                                    K0(inputStream);
                                    return;
                                } catch (IOException unused) {
                                    Log.w("SVGParser", "Detected internal entity definitions, but could not parse them.");
                                    return;
                                }
                            }
                        } else {
                            Log.d("SVGParser", "PROC INSTR: " + newPullParser.getText());
                            i iVar = new i(newPullParser.getText());
                            r(iVar.r(), x0(iVar));
                        }
                    } else {
                        W0();
                    }
                }
                o();
            } catch (IOException e10) {
                throw new f6.j("Stream error", e10);
            }
        } catch (XmlPullParserException e11) {
            throw new f6.j("XML parser problem", e11);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:68:0x00cf, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void M(f6.g.y r6, org.xml.sax.Attributes r7) {
        /*
            r5 = this;
            r0 = 0
        L1:
            int r1 = r7.getLength()
            if (r0 >= r1) goto Ld3
            java.lang.String r1 = r7.getValue(r0)
            java.lang.String r1 = r1.trim()
            int[] r2 = f6.k.a.f22592b
            java.lang.String r3 = r7.getLocalName(r0)
            f6.k$g r3 = f6.k.g.a(r3)
            int r3 = r3.ordinal()
            r2 = r2[r3]
            r3 = 1
            if (r2 == r3) goto Lc9
            r3 = 2
            if (r2 == r3) goto Lc2
            r3 = 3
            if (r2 == r3) goto Lad
            r3 = 4
            if (r2 == r3) goto L98
            r3 = 6
            if (r2 == r3) goto L7d
            java.lang.String r3 = "userSpaceOnUse"
            java.lang.String r4 = "objectBoundingBox"
            switch(r2) {
                case 40: goto L5f;
                case 41: goto L3f;
                case 42: goto L37;
                default: goto L35;
            }
        L35:
            goto Lcf
        L37:
            android.graphics.Matrix r1 = r5.J0(r1)
            r6.f22516s = r1
            goto Lcf
        L3f:
            boolean r2 = r4.equals(r1)
            if (r2 == 0) goto L4b
            java.lang.Boolean r1 = java.lang.Boolean.FALSE
            r6.f22515r = r1
            goto Lcf
        L4b:
            boolean r1 = r3.equals(r1)
            if (r1 == 0) goto L57
            java.lang.Boolean r1 = java.lang.Boolean.TRUE
            r6.f22515r = r1
            goto Lcf
        L57:
            f6.j r6 = new f6.j
            java.lang.String r7 = "Invalid value for attribute patternContentUnits"
            r6.<init>(r7)
            throw r6
        L5f:
            boolean r2 = r4.equals(r1)
            if (r2 == 0) goto L6a
            java.lang.Boolean r1 = java.lang.Boolean.FALSE
            r6.f22514q = r1
            goto Lcf
        L6a:
            boolean r1 = r3.equals(r1)
            if (r1 == 0) goto L75
            java.lang.Boolean r1 = java.lang.Boolean.TRUE
            r6.f22514q = r1
            goto Lcf
        L75:
            f6.j r6 = new f6.j
            java.lang.String r7 = "Invalid value for attribute patternUnits"
            r6.<init>(r7)
            throw r6
        L7d:
            java.lang.String r2 = ""
            java.lang.String r3 = r7.getURI(r0)
            boolean r2 = r2.equals(r3)
            if (r2 != 0) goto L95
            java.lang.String r2 = "http://www.w3.org/1999/xlink"
            java.lang.String r3 = r7.getURI(r0)
            boolean r2 = r2.equals(r3)
            if (r2 == 0) goto Lcf
        L95:
            r6.f22521x = r1
            goto Lcf
        L98:
            f6.g$p r1 = o0(r1)
            r6.f22520w = r1
            boolean r1 = r1.g()
            if (r1 != 0) goto La5
            goto Lcf
        La5:
            f6.j r6 = new f6.j
            java.lang.String r7 = "Invalid <pattern> element. height cannot be negative"
            r6.<init>(r7)
            throw r6
        Lad:
            f6.g$p r1 = o0(r1)
            r6.f22519v = r1
            boolean r1 = r1.g()
            if (r1 != 0) goto Lba
            goto Lcf
        Lba:
            f6.j r6 = new f6.j
            java.lang.String r7 = "Invalid <pattern> element. width cannot be negative"
            r6.<init>(r7)
            throw r6
        Lc2:
            f6.g$p r1 = o0(r1)
            r6.f22518u = r1
            goto Lcf
        Lc9:
            f6.g$p r1 = o0(r1)
            r6.f22517t = r1
        Lcf:
            int r0 = r0 + 1
            goto L1
        Ld3:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.k.M(f6.g$y, org.xml.sax.Attributes):void");
    }

    private static g.e0.i M0(String str) {
        str.getClass();
        if (!str.equals(ViewProps.NONE)) {
            if (!str.equals("non-scaling-stroke")) {
                return null;
            }
            return g.e0.i.NonScalingStroke;
        }
        return g.e0.i.None;
    }

    private void N(g.z zVar, Attributes attributes, String str) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            if (g.a(attributes.getLocalName(i10)) == g.points) {
                i iVar = new i(attributes.getValue(i10));
                ArrayList<Float> arrayList = new ArrayList();
                iVar.A();
                while (!iVar.h()) {
                    float n10 = iVar.n();
                    if (!Float.isNaN(n10)) {
                        iVar.z();
                        float n11 = iVar.n();
                        if (!Float.isNaN(n11)) {
                            iVar.z();
                            arrayList.add(Float.valueOf(n10));
                            arrayList.add(Float.valueOf(n11));
                        } else {
                            throw new f6.j("Invalid <" + str + "> points attribute. There should be an even number of coordinates.");
                        }
                    } else {
                        throw new f6.j("Invalid <" + str + "> points attribute. Non-coordinate content found in list.");
                    }
                }
                zVar.f22522o = new float[arrayList.size()];
                int i11 = 0;
                for (Float f10 : arrayList) {
                    zVar.f22522o[i11] = f10.floatValue();
                    i11++;
                }
            }
        }
    }

    private static g.b N0(String str) {
        i iVar = new i(str);
        iVar.A();
        float n10 = iVar.n();
        iVar.z();
        float n11 = iVar.n();
        iVar.z();
        float n12 = iVar.n();
        iVar.z();
        float n13 = iVar.n();
        if (!Float.isNaN(n10) && !Float.isNaN(n11) && !Float.isNaN(n12) && !Float.isNaN(n13)) {
            if (n12 >= 0.0f) {
                if (n13 >= 0.0f) {
                    return new g.b(n10, n11, n12, n13);
                }
                throw new f6.j("Invalid viewBox. height cannot be negative");
            }
            throw new f6.j("Invalid viewBox. width cannot be negative");
        }
        throw new f6.j("Invalid viewBox definition - should have four numbers");
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x005b, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void O(f6.g.q0 r5, org.xml.sax.Attributes r6) {
        /*
            r4 = this;
            r0 = 0
        L1:
            int r1 = r6.getLength()
            if (r0 >= r1) goto L5e
            java.lang.String r1 = r6.getValue(r0)
            java.lang.String r1 = r1.trim()
            int[] r2 = f6.k.a.f22592b
            java.lang.String r3 = r6.getLocalName(r0)
            f6.k$g r3 = f6.k.g.a(r3)
            int r3 = r3.ordinal()
            r2 = r2[r3]
            r3 = 35
            if (r2 == r3) goto L55
            r3 = 36
            if (r2 == r3) goto L4e
            switch(r2) {
                case 12: goto L47;
                case 13: goto L40;
                case 14: goto L2b;
                default: goto L2a;
            }
        L2a:
            goto L5b
        L2b:
            f6.g$p r1 = o0(r1)
            r5.f22486o = r1
            boolean r1 = r1.g()
            if (r1 != 0) goto L38
            goto L5b
        L38:
            f6.j r5 = new f6.j
            java.lang.String r6 = "Invalid <radialGradient> element. r cannot be negative"
            r5.<init>(r6)
            throw r5
        L40:
            f6.g$p r1 = o0(r1)
            r5.f22485n = r1
            goto L5b
        L47:
            f6.g$p r1 = o0(r1)
            r5.f22484m = r1
            goto L5b
        L4e:
            f6.g$p r1 = o0(r1)
            r5.f22488q = r1
            goto L5b
        L55:
            f6.g$p r1 = o0(r1)
            r5.f22487p = r1
        L5b:
            int r0 = r0 + 1
            goto L1
        L5e:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.k.O(f6.g$q0, org.xml.sax.Attributes):void");
    }

    private void O0(Attributes attributes) {
        l("<path>", new Object[0]);
        if (this.f22583b != null) {
            g.v vVar = new g.v();
            vVar.f22469a = this.f22582a;
            vVar.f22470b = this.f22583b;
            D(vVar, attributes);
            S(vVar, attributes);
            W(vVar, attributes);
            C(vVar, attributes);
            L(vVar, attributes);
            this.f22583b.g(vVar);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void P(g.b0 b0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 10) {
                                if (i11 != 11) {
                                    continue;
                                } else {
                                    g.p o02 = o0(trim);
                                    b0Var.f22347t = o02;
                                    if (o02.g()) {
                                        throw new f6.j("Invalid <rect> element. ry cannot be negative");
                                    }
                                }
                            } else {
                                g.p o03 = o0(trim);
                                b0Var.f22346s = o03;
                                if (o03.g()) {
                                    throw new f6.j("Invalid <rect> element. rx cannot be negative");
                                }
                            }
                        } else {
                            g.p o04 = o0(trim);
                            b0Var.f22345r = o04;
                            if (o04.g()) {
                                throw new f6.j("Invalid <rect> element. height cannot be negative");
                            }
                        }
                    } else {
                        g.p o05 = o0(trim);
                        b0Var.f22344q = o05;
                        if (o05.g()) {
                            throw new f6.j("Invalid <rect> element. width cannot be negative");
                        }
                    }
                } else {
                    b0Var.f22343p = o0(trim);
                }
            } else {
                b0Var.f22342o = o0(trim);
            }
        }
    }

    private void P0(Attributes attributes) {
        l("<pattern>", new Object[0]);
        if (this.f22583b != null) {
            g.y yVar = new g.y();
            yVar.f22469a = this.f22582a;
            yVar.f22470b = this.f22583b;
            D(yVar, attributes);
            S(yVar, attributes);
            C(yVar, attributes);
            Y(yVar, attributes);
            M(yVar, attributes);
            this.f22583b.g(yVar);
            this.f22583b = yVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void Q(g.f0 f0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 == 5) {
                                f0Var.f22431u = trim;
                            }
                        } else {
                            g.p o02 = o0(trim);
                            f0Var.f22430t = o02;
                            if (o02.g()) {
                                throw new f6.j("Invalid <svg> element. height cannot be negative");
                            }
                        }
                    } else {
                        g.p o03 = o0(trim);
                        f0Var.f22429s = o03;
                        if (o03.g()) {
                            throw new f6.j("Invalid <svg> element. width cannot be negative");
                        }
                    }
                } else {
                    f0Var.f22428r = o0(trim);
                }
            } else {
                f0Var.f22427q = o0(trim);
            }
        }
    }

    private void Q0(Attributes attributes) {
        l("<polygon>", new Object[0]);
        if (this.f22583b != null) {
            g.z a0Var = new g.a0();
            a0Var.f22469a = this.f22582a;
            a0Var.f22470b = this.f22583b;
            D(a0Var, attributes);
            S(a0Var, attributes);
            W(a0Var, attributes);
            C(a0Var, attributes);
            N(a0Var, attributes, "polygon");
            this.f22583b.g(a0Var);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void R(g.d0 d0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            if (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()] == 37) {
                d0Var.f22357h = n0(trim);
            }
        }
    }

    private void R0(Attributes attributes) {
        l("<polyline>", new Object[0]);
        if (this.f22583b != null) {
            g.z zVar = new g.z();
            zVar.f22469a = this.f22582a;
            zVar.f22470b = this.f22583b;
            D(zVar, attributes);
            S(zVar, attributes);
            W(zVar, attributes);
            C(zVar, attributes);
            N(zVar, attributes, "polyline");
            this.f22583b.g(zVar);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void S(g.l0 l0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            if (trim.length() != 0) {
                int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
                if (i11 != 45) {
                    if (i11 != 46) {
                        if (l0Var.f22461e == null) {
                            l0Var.f22461e = new g.e0();
                        }
                        S0(l0Var.f22461e, attributes.getLocalName(i10), attributes.getValue(i10).trim());
                    } else {
                        l0Var.f22463g = f6.b.f(trim);
                    }
                } else {
                    E0(l0Var, trim);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void S0(g.e0 e0Var, String str, String str2) {
        if (str2.length() == 0 || str2.equals("inherit")) {
            return;
        }
        try {
            switch (a.f22592b[g.a(str).ordinal()]) {
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    g.o0 t02 = t0(str2);
                    e0Var.f22370e = t02;
                    if (t02 != null) {
                        e0Var.f22369d |= 1;
                        return;
                    }
                    return;
                case 48:
                    g.e0.a e02 = e0(str2);
                    e0Var.f22371i = e02;
                    if (e02 != null) {
                        e0Var.f22369d |= 2;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    Float r02 = r0(str2);
                    e0Var.f22372o = r02;
                    if (r02 != null) {
                        e0Var.f22369d |= 4;
                        return;
                    }
                    return;
                case 50:
                    g.o0 t03 = t0(str2);
                    e0Var.f22373p = t03;
                    if (t03 != null) {
                        e0Var.f22369d |= 8;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    Float r03 = r0(str2);
                    e0Var.f22374q = r03;
                    if (r03 != null) {
                        e0Var.f22369d |= 16;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e0Var.f22375r = o0(str2);
                    e0Var.f22369d |= 32;
                    return;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    g.e0.c C0 = C0(str2);
                    e0Var.f22376s = C0;
                    if (C0 != null) {
                        e0Var.f22369d |= 64;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    g.e0.d D0 = D0(str2);
                    e0Var.f22377t = D0;
                    if (D0 != null) {
                        e0Var.f22369d |= 128;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    e0Var.f22378u = Float.valueOf(f0(str2));
                    e0Var.f22369d |= 256;
                    return;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (ViewProps.NONE.equals(str2)) {
                        e0Var.f22379v = null;
                        e0Var.f22369d |= 512;
                        return;
                    }
                    g.p[] B0 = B0(str2);
                    e0Var.f22379v = B0;
                    if (B0 != null) {
                        e0Var.f22369d |= 512;
                        return;
                    }
                    return;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    e0Var.f22380w = o0(str2);
                    e0Var.f22369d |= 1024;
                    return;
                case 58:
                    e0Var.f22381x = r0(str2);
                    e0Var.f22369d |= 2048;
                    return;
                case 59:
                    e0Var.f22382y = b0(str2);
                    e0Var.f22369d |= 4096;
                    return;
                case 60:
                    h0(e0Var, str2);
                    return;
                case 61:
                    List i02 = i0(str2);
                    e0Var.f22383z = i02;
                    if (i02 != null) {
                        e0Var.f22369d |= 8192;
                        return;
                    }
                    return;
                case 62:
                    g.p j02 = j0(str2);
                    e0Var.A = j02;
                    if (j02 != null) {
                        e0Var.f22369d |= 16384;
                        return;
                    }
                    return;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    Integer l02 = l0(str2);
                    e0Var.B = l02;
                    if (l02 != null) {
                        e0Var.f22369d |= 32768;
                        return;
                    }
                    return;
                case 64:
                    g.e0.b k02 = k0(str2);
                    e0Var.C = k02;
                    if (k02 != null) {
                        e0Var.f22369d |= 65536;
                        return;
                    }
                    return;
                case 65:
                    g.e0.EnumC0308g H0 = H0(str2);
                    e0Var.D = H0;
                    if (H0 != null) {
                        e0Var.f22369d |= 131072;
                        return;
                    }
                    return;
                case 66:
                    g.e0.h I0 = I0(str2);
                    e0Var.E = I0;
                    if (I0 != null) {
                        e0Var.f22369d |= 68719476736L;
                        return;
                    }
                    return;
                case 67:
                    g.e0.f G0 = G0(str2);
                    e0Var.F = G0;
                    if (G0 != null) {
                        e0Var.f22369d |= 262144;
                        return;
                    }
                    return;
                case 68:
                    Boolean s02 = s0(str2);
                    e0Var.G = s02;
                    if (s02 != null) {
                        e0Var.f22369d |= 524288;
                        return;
                    }
                    return;
                case 69:
                    String m02 = m0(str2, str);
                    e0Var.I = m02;
                    e0Var.J = m02;
                    e0Var.K = m02;
                    e0Var.f22369d |= 14680064;
                    return;
                case 70:
                    e0Var.I = m0(str2, str);
                    e0Var.f22369d |= 2097152;
                    return;
                case 71:
                    e0Var.J = m0(str2, str);
                    e0Var.f22369d |= 4194304;
                    return;
                case 72:
                    e0Var.K = m0(str2, str);
                    e0Var.f22369d |= 8388608;
                    return;
                case 73:
                    if (str2.indexOf(124) < 0) {
                        if ("|inline|block|list-item|run-in|compact|marker|table|inline-table|table-row-group|table-header-group|table-footer-group|table-row|table-column-group|table-column|table-cell|table-caption|none|".contains('|' + str2 + '|')) {
                            e0Var.L = Boolean.valueOf(!str2.equals(ViewProps.NONE));
                            e0Var.f22369d |= 16777216;
                            return;
                        }
                        return;
                    }
                    return;
                case 74:
                    if (str2.indexOf(124) < 0) {
                        if ("|visible|hidden|collapse|".contains('|' + str2 + '|')) {
                            e0Var.M = Boolean.valueOf(str2.equals(ViewProps.VISIBLE));
                            e0Var.f22369d |= 33554432;
                            return;
                        }
                        return;
                    }
                    return;
                case 75:
                    if (str2.equals("currentColor")) {
                        e0Var.N = g.C0309g.a();
                    } else {
                        try {
                            e0Var.N = b0(str2);
                        } catch (f6.j e10) {
                            Log.w("SVGParser", e10.getMessage());
                            return;
                        }
                    }
                    e0Var.f22369d |= 67108864;
                    return;
                case 76:
                    e0Var.O = r0(str2);
                    e0Var.f22369d |= 134217728;
                    return;
                case 77:
                    g.c a02 = a0(str2);
                    e0Var.H = a02;
                    if (a02 != null) {
                        e0Var.f22369d |= 1048576;
                        return;
                    }
                    return;
                case 78:
                    e0Var.P = m0(str2, str);
                    e0Var.f22369d |= 268435456;
                    return;
                case 79:
                    e0Var.Q = e0(str2);
                    e0Var.f22369d |= 536870912;
                    return;
                case 80:
                    e0Var.R = m0(str2, str);
                    e0Var.f22369d |= 1073741824;
                    return;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    if (str2.equals("currentColor")) {
                        e0Var.S = g.C0309g.a();
                    } else {
                        try {
                            e0Var.S = b0(str2);
                        } catch (f6.j e11) {
                            Log.w("SVGParser", e11.getMessage());
                            return;
                        }
                    }
                    e0Var.f22369d |= 2147483648L;
                    return;
                case 82:
                    e0Var.T = r0(str2);
                    e0Var.f22369d |= 4294967296L;
                    return;
                case 83:
                    if (str2.equals("currentColor")) {
                        e0Var.U = g.C0309g.a();
                    } else {
                        try {
                            e0Var.U = b0(str2);
                        } catch (f6.j e12) {
                            Log.w("SVGParser", e12.getMessage());
                            return;
                        }
                    }
                    e0Var.f22369d |= 8589934592L;
                    return;
                case 84:
                    e0Var.V = r0(str2);
                    e0Var.f22369d |= 17179869184L;
                    return;
                case 85:
                    g.e0.i M0 = M0(str2);
                    e0Var.W = M0;
                    if (M0 != null) {
                        e0Var.f22369d |= 34359738368L;
                        return;
                    }
                    return;
                case 86:
                    g.e0.e y02 = y0(str2);
                    e0Var.X = y02;
                    if (y02 != null) {
                        e0Var.f22369d |= 137438953472L;
                        return;
                    }
                    return;
                default:
                    return;
            }
        } catch (f6.j unused) {
        }
    }

    private void T(g.u0 u0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            if (a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()] == 6 && ("".equals(attributes.getURI(i10)) || "http://www.w3.org/1999/xlink".equals(attributes.getURI(i10)))) {
                u0Var.f22504o = trim;
            }
        }
    }

    private void T0(Attributes attributes) {
        l("<radialGradient>", new Object[0]);
        if (this.f22583b != null) {
            g.q0 q0Var = new g.q0();
            q0Var.f22469a = this.f22582a;
            q0Var.f22470b = this.f22583b;
            D(q0Var, attributes);
            S(q0Var, attributes);
            F(q0Var, attributes);
            O(q0Var, attributes);
            this.f22583b.g(q0Var);
            this.f22583b = q0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void U(g.z0 z0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 6) {
                if (i11 == 39) {
                    z0Var.f22524p = o0(trim);
                }
            } else if ("".equals(attributes.getURI(i10)) || "http://www.w3.org/1999/xlink".equals(attributes.getURI(i10))) {
                z0Var.f22523o = trim;
            }
        }
    }

    private void U0(Attributes attributes) {
        l("<rect>", new Object[0]);
        if (this.f22583b != null) {
            g.b0 b0Var = new g.b0();
            b0Var.f22469a = this.f22582a;
            b0Var.f22470b = this.f22583b;
            D(b0Var, attributes);
            S(b0Var, attributes);
            W(b0Var, attributes);
            C(b0Var, attributes);
            P(b0Var, attributes);
            this.f22583b.g(b0Var);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void V(g.a1 a1Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 19) {
                        if (i11 == 20) {
                            a1Var.f22337r = p0(trim);
                        }
                    } else {
                        a1Var.f22336q = p0(trim);
                    }
                } else {
                    a1Var.f22335p = p0(trim);
                }
            } else {
                a1Var.f22334o = p0(trim);
            }
        }
    }

    private void V0(Attributes attributes) {
        l("<solidColor>", new Object[0]);
        if (this.f22583b != null) {
            g.c0 c0Var = new g.c0();
            c0Var.f22469a = this.f22582a;
            c0Var.f22470b = this.f22583b;
            D(c0Var, attributes);
            S(c0Var, attributes);
            this.f22583b.g(c0Var);
            this.f22583b = c0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void W(g.n nVar, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            if (g.a(attributes.getLocalName(i10)) == g.transform) {
                nVar.k(J0(attributes.getValue(i10)));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void W0() {
        this.f22582a = new f6.g();
    }

    private void X(g.e1 e1Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 == 6 && ("".equals(attributes.getURI(i10)) || "http://www.w3.org/1999/xlink".equals(attributes.getURI(i10)))) {
                                e1Var.f22419p = trim;
                            }
                        } else {
                            g.p o02 = o0(trim);
                            e1Var.f22423t = o02;
                            if (o02.g()) {
                                throw new f6.j("Invalid <use> element. height cannot be negative");
                            }
                        }
                    } else {
                        g.p o03 = o0(trim);
                        e1Var.f22422s = o03;
                        if (o03.g()) {
                            throw new f6.j("Invalid <use> element. width cannot be negative");
                        }
                    }
                } else {
                    e1Var.f22421r = o0(trim);
                }
            } else {
                e1Var.f22420q = o0(trim);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void X0(String str, String str2, String str3, Attributes attributes) {
        if (this.f22584c) {
            this.f22585d++;
        } else if (!"http://www.w3.org/2000/svg".equals(str) && !"".equals(str)) {
        } else {
            if (str2.length() <= 0) {
                str2 = str3;
            }
            h a10 = h.a(str2);
            switch (a.f22591a[a10.ordinal()]) {
                case 1:
                    a1(attributes);
                    return;
                case 2:
                case 3:
                    q(attributes);
                    return;
                case 4:
                    m(attributes);
                    return;
                case 5:
                    i1(attributes);
                    return;
                case 6:
                    O0(attributes);
                    return;
                case 7:
                    U0(attributes);
                    return;
                case 8:
                    i(attributes);
                    return;
                case 9:
                    n(attributes);
                    return;
                case 10:
                    v(attributes);
                    return;
                case 11:
                    R0(attributes);
                    return;
                case 12:
                    Q0(attributes);
                    return;
                case 13:
                    d1(attributes);
                    return;
                case 14:
                    h1(attributes);
                    return;
                case 15:
                    g1(attributes);
                    return;
                case 16:
                    k1(attributes);
                    return;
                case 17:
                    b1(attributes);
                    return;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    x(attributes);
                    return;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    w(attributes);
                    return;
                case 20:
                    T0(attributes);
                    return;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    Y0(attributes);
                    return;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case 23:
                    this.f22586e = true;
                    this.f22587f = a10;
                    return;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    k(attributes);
                    return;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    f1(attributes);
                    return;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    P0(attributes);
                    return;
                case 27:
                    u(attributes);
                    return;
                case 28:
                    j1(attributes);
                    return;
                case 29:
                    y(attributes);
                    return;
                case 30:
                    Z0(attributes);
                    return;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    V0(attributes);
                    return;
                default:
                    this.f22584c = true;
                    this.f22585d = 1;
                    return;
            }
        }
    }

    private void Y(g.r0 r0Var, Attributes attributes) {
        for (int i10 = 0; i10 < attributes.getLength(); i10++) {
            String trim = attributes.getValue(i10).trim();
            int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
            if (i11 != 7) {
                if (i11 == 87) {
                    r0Var.f22495p = N0(trim);
                }
            } else {
                w0(r0Var, trim);
            }
        }
    }

    private void Y0(Attributes attributes) {
        l("<stop>", new Object[0]);
        g.j0 j0Var = this.f22583b;
        if (j0Var != null) {
            if (j0Var instanceof g.j) {
                g.d0 d0Var = new g.d0();
                d0Var.f22469a = this.f22582a;
                d0Var.f22470b = this.f22583b;
                D(d0Var, attributes);
                S(d0Var, attributes);
                R(d0Var, attributes);
                this.f22583b.g(d0Var);
                this.f22583b = d0Var;
                return;
            }
            throw new f6.j("Invalid document. <stop> elements are only valid inside <linearGradient> or <radialGradient> elements.");
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void Z(String str) {
        this.f22582a.a(new f6.b(b.f.screen, b.u.Document).d(str));
    }

    private void Z0(Attributes attributes) {
        l("<style>", new Object[0]);
        if (this.f22583b != null) {
            String str = "all";
            boolean z10 = true;
            for (int i10 = 0; i10 < attributes.getLength(); i10++) {
                String trim = attributes.getValue(i10).trim();
                int i11 = a.f22592b[g.a(attributes.getLocalName(i10)).ordinal()];
                if (i11 != 88) {
                    if (i11 == 89) {
                        str = trim;
                    }
                } else {
                    z10 = trim.equals("text/css");
                }
            }
            if (z10 && f6.b.b(str, b.f.screen)) {
                this.f22589h = true;
                return;
            }
            this.f22584c = true;
            this.f22585d = 1;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.c a0(String str) {
        if ("auto".equals(str) || !str.startsWith("rect(")) {
            return null;
        }
        i iVar = new i(str.substring(5));
        iVar.A();
        g.p q02 = q0(iVar);
        iVar.z();
        g.p q03 = q0(iVar);
        iVar.z();
        g.p q04 = q0(iVar);
        iVar.z();
        g.p q05 = q0(iVar);
        iVar.A();
        if (!iVar.f(')') && !iVar.h()) {
            return null;
        }
        return new g.c(q02, q03, q04, q05);
    }

    private void a1(Attributes attributes) {
        l("<svg>", new Object[0]);
        g.f0 f0Var = new g.f0();
        f0Var.f22469a = this.f22582a;
        f0Var.f22470b = this.f22583b;
        D(f0Var, attributes);
        S(f0Var, attributes);
        C(f0Var, attributes);
        Y(f0Var, attributes);
        Q(f0Var, attributes);
        g.j0 j0Var = this.f22583b;
        if (j0Var == null) {
            this.f22582a.u(f0Var);
        } else {
            j0Var.g(f0Var);
        }
        this.f22583b = f0Var;
    }

    private static g.f b0(String str) {
        int i10 = 5;
        if (str.charAt(0) == '#') {
            f6.c b10 = f6.c.b(str, 1, str.length());
            if (b10 != null) {
                int a10 = b10.a();
                if (a10 != 4) {
                    if (a10 != 5) {
                        if (a10 != 7) {
                            if (a10 == 9) {
                                return new g.f((b10.d() >>> 8) | (b10.d() << 24));
                            }
                            throw new f6.j("Bad hex colour value: " + str);
                        }
                        return new g.f(b10.d() | (-16777216));
                    }
                    int d10 = b10.d();
                    int i11 = 61440 & d10;
                    int i12 = d10 & 3840;
                    int i13 = d10 & 240;
                    int i14 = d10 & 15;
                    return new g.f((i14 << 24) | (i14 << 28) | (i11 << 8) | (i11 << 4) | (i12 << 4) | i12 | i13 | (i13 >> 4));
                }
                int d11 = b10.d();
                int i15 = d11 & 3840;
                int i16 = d11 & 240;
                int i17 = d11 & 15;
                return new g.f(i17 | (i15 << 8) | (-16777216) | (i15 << 12) | (i16 << 8) | (i16 << 4) | (i17 << 4));
            }
            throw new f6.j("Bad hex colour value: " + str);
        }
        String lowerCase = str.toLowerCase(Locale.US);
        boolean startsWith = lowerCase.startsWith("rgba(");
        if (!startsWith && !lowerCase.startsWith("rgb(")) {
            boolean startsWith2 = lowerCase.startsWith("hsla(");
            if (!startsWith2 && !lowerCase.startsWith("hsl(")) {
                return c0(lowerCase);
            }
            if (!startsWith2) {
                i10 = 4;
            }
            i iVar = new i(str.substring(i10));
            iVar.A();
            float n10 = iVar.n();
            float d12 = iVar.d(n10);
            if (!Float.isNaN(d12)) {
                iVar.f('%');
            }
            float d13 = iVar.d(d12);
            if (!Float.isNaN(d13)) {
                iVar.f('%');
            }
            if (startsWith2) {
                float d14 = iVar.d(d13);
                iVar.A();
                if (!Float.isNaN(d14) && iVar.f(')')) {
                    return new g.f((j(d14 * 256.0f) << 24) | s(n10, d12, d13));
                }
                throw new f6.j("Bad hsla() colour value: " + str);
            }
            iVar.A();
            if (!Float.isNaN(d13) && iVar.f(')')) {
                return new g.f(s(n10, d12, d13) | (-16777216));
            }
            throw new f6.j("Bad hsl() colour value: " + str);
        }
        if (!startsWith) {
            i10 = 4;
        }
        i iVar2 = new i(str.substring(i10));
        iVar2.A();
        float n11 = iVar2.n();
        if (!Float.isNaN(n11) && iVar2.f('%')) {
            n11 = (n11 * 256.0f) / 100.0f;
        }
        float d15 = iVar2.d(n11);
        if (!Float.isNaN(d15) && iVar2.f('%')) {
            d15 = (d15 * 256.0f) / 100.0f;
        }
        float d16 = iVar2.d(d15);
        if (!Float.isNaN(d16) && iVar2.f('%')) {
            d16 = (d16 * 256.0f) / 100.0f;
        }
        if (startsWith) {
            float d17 = iVar2.d(d16);
            iVar2.A();
            if (!Float.isNaN(d17) && iVar2.f(')')) {
                return new g.f((j(d17 * 256.0f) << 24) | (j(n11) << 16) | (j(d15) << 8) | j(d16));
            }
            throw new f6.j("Bad rgba() colour value: " + str);
        }
        iVar2.A();
        if (!Float.isNaN(d16) && iVar2.f(')')) {
            return new g.f((j(n11) << 16) | (-16777216) | (j(d15) << 8) | j(d16));
        }
        throw new f6.j("Bad rgb() colour value: " + str);
    }

    private void b1(Attributes attributes) {
        l("<symbol>", new Object[0]);
        if (this.f22583b != null) {
            g.r0 t0Var = new g.t0();
            t0Var.f22469a = this.f22582a;
            t0Var.f22470b = this.f22583b;
            D(t0Var, attributes);
            S(t0Var, attributes);
            C(t0Var, attributes);
            Y(t0Var, attributes);
            this.f22583b.g(t0Var);
            this.f22583b = t0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.f c0(String str) {
        Integer a10 = c.a(str);
        if (a10 != null) {
            return new g.f(a10.intValue());
        }
        throw new f6.j("Invalid colour keyword: " + str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c1(String str) {
        if (!this.f22584c) {
            if (this.f22586e) {
                if (this.f22588g == null) {
                    this.f22588g = new StringBuilder(str.length());
                }
                this.f22588g.append(str);
            } else if (this.f22589h) {
                if (this.f22590i == null) {
                    this.f22590i = new StringBuilder(str.length());
                }
                this.f22590i.append(str);
            } else if (this.f22583b instanceof g.y0) {
                h(str);
            }
        }
    }

    private static g.o0 d0(String str) {
        str.getClass();
        if (!str.equals(ViewProps.NONE)) {
            if (!str.equals("currentColor")) {
                try {
                    return b0(str);
                } catch (f6.j unused) {
                    return null;
                }
            }
            return g.C0309g.a();
        }
        return g.f.f22425i;
    }

    private void d1(Attributes attributes) {
        l("<text>", new Object[0]);
        if (this.f22583b != null) {
            g.w0 w0Var = new g.w0();
            w0Var.f22469a = this.f22582a;
            w0Var.f22470b = this.f22583b;
            D(w0Var, attributes);
            S(w0Var, attributes);
            W(w0Var, attributes);
            C(w0Var, attributes);
            V(w0Var, attributes);
            this.f22583b.g(w0Var);
            this.f22583b = w0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.e0.a e0(String str) {
        if ("nonzero".equals(str)) {
            return g.e0.a.NonZero;
        }
        if ("evenodd".equals(str)) {
            return g.e0.a.EvenOdd;
        }
        return null;
    }

    private void e1(char[] cArr, int i10, int i11) {
        if (!this.f22584c) {
            if (this.f22586e) {
                if (this.f22588g == null) {
                    this.f22588g = new StringBuilder(i11);
                }
                this.f22588g.append(cArr, i10, i11);
            } else if (this.f22589h) {
                if (this.f22590i == null) {
                    this.f22590i = new StringBuilder(i11);
                }
                this.f22590i.append(cArr, i10, i11);
            } else if (this.f22583b instanceof g.y0) {
                h(new String(cArr, i10, i11));
            }
        }
    }

    private static float f0(String str) {
        int length = str.length();
        if (length != 0) {
            return g0(str, 0, length);
        }
        throw new f6.j("Invalid float value (empty string)");
    }

    private void f1(Attributes attributes) {
        l("<textPath>", new Object[0]);
        if (this.f22583b != null) {
            g.z0 z0Var = new g.z0();
            z0Var.f22469a = this.f22582a;
            z0Var.f22470b = this.f22583b;
            D(z0Var, attributes);
            S(z0Var, attributes);
            C(z0Var, attributes);
            U(z0Var, attributes);
            this.f22583b.g(z0Var);
            this.f22583b = z0Var;
            g.j0 j0Var = z0Var.f22470b;
            if (j0Var instanceof g.b1) {
                z0Var.o((g.b1) j0Var);
                return;
            } else {
                z0Var.o(((g.x0) j0Var).d());
                return;
            }
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static float g0(String str, int i10, int i11) {
        float b10 = new f6.d().b(str, i10, i11);
        if (!Float.isNaN(b10)) {
            return b10;
        }
        throw new f6.j("Invalid float value: " + str);
    }

    private void g1(Attributes attributes) {
        l("<tref>", new Object[0]);
        g.j0 j0Var = this.f22583b;
        if (j0Var != null) {
            if (j0Var instanceof g.y0) {
                g.u0 u0Var = new g.u0();
                u0Var.f22469a = this.f22582a;
                u0Var.f22470b = this.f22583b;
                D(u0Var, attributes);
                S(u0Var, attributes);
                C(u0Var, attributes);
                T(u0Var, attributes);
                this.f22583b.g(u0Var);
                g.j0 j0Var2 = u0Var.f22470b;
                if (j0Var2 instanceof g.b1) {
                    u0Var.o((g.b1) j0Var2);
                    return;
                } else {
                    u0Var.o(((g.x0) j0Var2).d());
                    return;
                }
            }
            throw new f6.j("Invalid document. <tref> elements are only valid inside <text> or <tspan> elements.");
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void h(String str) {
        g.n0 n0Var;
        g.h0 h0Var = (g.h0) this.f22583b;
        int size = h0Var.f22433i.size();
        if (size == 0) {
            n0Var = null;
        } else {
            n0Var = (g.n0) h0Var.f22433i.get(size - 1);
        }
        if (n0Var instanceof g.c1) {
            StringBuilder sb2 = new StringBuilder();
            g.c1 c1Var = (g.c1) n0Var;
            sb2.append(c1Var.f22352c);
            sb2.append(str);
            c1Var.f22352c = sb2.toString();
            return;
        }
        this.f22583b.g(new g.c1(str));
    }

    private static void h0(g.e0 e0Var, String str) {
        String s10;
        int intValue;
        if ("|caption|icon|menu|message-box|small-caption|status-bar|".contains('|' + str + '|')) {
            i iVar = new i(str);
            Integer num = null;
            g.e0.b bVar = null;
            String str2 = null;
            while (true) {
                s10 = iVar.s('/');
                iVar.A();
                if (s10 == null) {
                    return;
                }
                if (num != null && bVar != null) {
                    break;
                } else if (!s10.equals("normal") && (num != null || (num = e.a(s10)) == null)) {
                    if (bVar != null || (bVar = k0(s10)) == null) {
                        if (str2 != null || !s10.equals("small-caps")) {
                            break;
                        }
                        str2 = s10;
                    }
                }
            }
            g.p j02 = j0(s10);
            if (iVar.f('/')) {
                iVar.A();
                String r10 = iVar.r();
                if (r10 != null) {
                    try {
                        o0(r10);
                    } catch (f6.j unused) {
                        return;
                    }
                }
                iVar.A();
            }
            e0Var.f22383z = i0(iVar.y());
            e0Var.A = j02;
            if (num == null) {
                intValue = ReactFontManager.TypefaceStyle.NORMAL;
            } else {
                intValue = num.intValue();
            }
            e0Var.B = Integer.valueOf(intValue);
            if (bVar == null) {
                bVar = g.e0.b.Normal;
            }
            e0Var.C = bVar;
            e0Var.f22369d |= 122880;
        }
    }

    private void h1(Attributes attributes) {
        l("<tspan>", new Object[0]);
        g.j0 j0Var = this.f22583b;
        if (j0Var != null) {
            if (j0Var instanceof g.y0) {
                g.v0 v0Var = new g.v0();
                v0Var.f22469a = this.f22582a;
                v0Var.f22470b = this.f22583b;
                D(v0Var, attributes);
                S(v0Var, attributes);
                C(v0Var, attributes);
                V(v0Var, attributes);
                this.f22583b.g(v0Var);
                this.f22583b = v0Var;
                g.j0 j0Var2 = v0Var.f22470b;
                if (j0Var2 instanceof g.b1) {
                    v0Var.o((g.b1) j0Var2);
                    return;
                } else {
                    v0Var.o(((g.x0) j0Var2).d());
                    return;
                }
            }
            throw new f6.j("Invalid document. <tspan> elements are only valid inside <text> or other <tspan> elements.");
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void i(Attributes attributes) {
        l("<circle>", new Object[0]);
        if (this.f22583b != null) {
            g.d dVar = new g.d();
            dVar.f22469a = this.f22582a;
            dVar.f22470b = this.f22583b;
            D(dVar, attributes);
            S(dVar, attributes);
            W(dVar, attributes);
            C(dVar, attributes);
            A(dVar, attributes);
            this.f22583b.g(dVar);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static List i0(String str) {
        i iVar = new i(str);
        ArrayList arrayList = null;
        do {
            String q10 = iVar.q();
            if (q10 == null) {
                q10 = iVar.u(',');
            }
            if (q10 == null) {
                return arrayList;
            }
            if (arrayList == null) {
                arrayList = new ArrayList();
            }
            arrayList.add(q10);
            iVar.z();
        } while (!iVar.h());
        return arrayList;
    }

    private void i1(Attributes attributes) {
        l("<use>", new Object[0]);
        if (this.f22583b != null) {
            g.e1 e1Var = new g.e1();
            e1Var.f22469a = this.f22582a;
            e1Var.f22470b = this.f22583b;
            D(e1Var, attributes);
            S(e1Var, attributes);
            W(e1Var, attributes);
            C(e1Var, attributes);
            X(e1Var, attributes);
            this.f22583b.g(e1Var);
            this.f22583b = e1Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static int j(float f10) {
        if (f10 < 0.0f) {
            return 0;
        }
        if (f10 > 255.0f) {
            return SetSpanOperation.SPAN_MAX_PRIORITY;
        }
        return Math.round(f10);
    }

    private static g.p j0(String str) {
        try {
            g.p a10 = d.a(str);
            if (a10 == null) {
                return o0(str);
            }
            return a10;
        } catch (f6.j unused) {
            return null;
        }
    }

    private void j1(Attributes attributes) {
        l("<view>", new Object[0]);
        if (this.f22583b != null) {
            g.r0 f1Var = new g.f1();
            f1Var.f22469a = this.f22582a;
            f1Var.f22470b = this.f22583b;
            D(f1Var, attributes);
            C(f1Var, attributes);
            Y(f1Var, attributes);
            this.f22583b.g(f1Var);
            this.f22583b = f1Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private void k(Attributes attributes) {
        l("<clipPath>", new Object[0]);
        if (this.f22583b != null) {
            g.e eVar = new g.e();
            eVar.f22469a = this.f22582a;
            eVar.f22470b = this.f22583b;
            D(eVar, attributes);
            S(eVar, attributes);
            W(eVar, attributes);
            C(eVar, attributes);
            B(eVar, attributes);
            this.f22583b.g(eVar);
            this.f22583b = eVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.e0.b k0(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1657669071:
                if (str.equals("oblique")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1178781136:
                if (str.equals(Fonts.Font.STYLE_ITALIC)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1039745817:
                if (str.equals("normal")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return g.e0.b.Oblique;
            case 1:
                return g.e0.b.Italic;
            case 2:
                return g.e0.b.Normal;
            default:
                return null;
        }
    }

    private void k1(Attributes attributes) {
        l("<switch>", new Object[0]);
        if (this.f22583b != null) {
            g.s0 s0Var = new g.s0();
            s0Var.f22469a = this.f22582a;
            s0Var.f22470b = this.f22583b;
            D(s0Var, attributes);
            S(s0Var, attributes);
            W(s0Var, attributes);
            C(s0Var, attributes);
            this.f22583b.g(s0Var);
            this.f22583b = s0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static Integer l0(String str) {
        return e.a(str);
    }

    private void m(Attributes attributes) {
        l("<defs>", new Object[0]);
        if (this.f22583b != null) {
            g.h hVar = new g.h();
            hVar.f22469a = this.f22582a;
            hVar.f22470b = this.f22583b;
            D(hVar, attributes);
            S(hVar, attributes);
            W(hVar, attributes);
            this.f22583b.g(hVar);
            this.f22583b = hVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static String m0(String str, String str2) {
        if (str.equals(ViewProps.NONE) || !str.startsWith("url(")) {
            return null;
        }
        if (str.endsWith(")")) {
            return str.substring(4, str.length() - 1).trim();
        }
        return str.substring(4).trim();
    }

    private void n(Attributes attributes) {
        l("<ellipse>", new Object[0]);
        if (this.f22583b != null) {
            g.i iVar = new g.i();
            iVar.f22469a = this.f22582a;
            iVar.f22470b = this.f22583b;
            D(iVar, attributes);
            S(iVar, attributes);
            W(iVar, attributes);
            C(iVar, attributes);
            E(iVar, attributes);
            this.f22583b.g(iVar);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private Float n0(String str) {
        if (str.length() != 0) {
            int length = str.length();
            boolean z10 = true;
            if (str.charAt(str.length() - 1) == '%') {
                length--;
            } else {
                z10 = false;
            }
            try {
                float g02 = g0(str, 0, length);
                float f10 = 100.0f;
                if (z10) {
                    g02 /= 100.0f;
                }
                if (g02 < 0.0f) {
                    f10 = 0.0f;
                } else if (g02 <= 100.0f) {
                    f10 = g02;
                }
                return Float.valueOf(f10);
            } catch (NumberFormatException e10) {
                throw new f6.j("Invalid offset value in <stop>: " + str, e10);
            }
        }
        throw new f6.j("Invalid offset value in <stop> (empty string)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g.p o0(String str) {
        if (str.length() != 0) {
            int length = str.length();
            g.d1 d1Var = g.d1.px;
            char charAt = str.charAt(length - 1);
            if (charAt == '%') {
                length--;
                d1Var = g.d1.percent;
            } else if (length > 2 && Character.isLetter(charAt) && Character.isLetter(str.charAt(length - 2))) {
                length -= 2;
                try {
                    d1Var = g.d1.valueOf(str.substring(length).toLowerCase(Locale.US));
                } catch (IllegalArgumentException unused) {
                    throw new f6.j("Invalid length unit specifier: " + str);
                }
            }
            try {
                return new g.p(g0(str, 0, length), d1Var);
            } catch (NumberFormatException e10) {
                throw new f6.j("Invalid length value: " + str, e10);
            }
        }
        throw new f6.j("Invalid length value (empty string)");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(String str, String str2, String str3) {
        if (this.f22584c) {
            int i10 = this.f22585d - 1;
            this.f22585d = i10;
            if (i10 == 0) {
                this.f22584c = false;
                return;
            }
        }
        if ("http://www.w3.org/2000/svg".equals(str) || "".equals(str)) {
            if (str2.length() <= 0) {
                str2 = str3;
            }
            int i11 = a.f22591a[h.a(str2).ordinal()];
            if (i11 != 1 && i11 != 2 && i11 != 4 && i11 != 5 && i11 != 13 && i11 != 14) {
                switch (i11) {
                    case 16:
                    case 17:
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    case 20:
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    case 27:
                    case 28:
                    case 29:
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    case 23:
                        this.f22586e = false;
                        StringBuilder sb2 = this.f22588g;
                        if (sb2 != null) {
                            h hVar = this.f22587f;
                            if (hVar == h.title) {
                                this.f22582a.v(sb2.toString());
                            } else if (hVar == h.desc) {
                                this.f22582a.q(sb2.toString());
                            }
                            this.f22588g.setLength(0);
                            return;
                        }
                        return;
                    case 30:
                        StringBuilder sb3 = this.f22590i;
                        if (sb3 != null) {
                            this.f22589h = false;
                            Z(sb3.toString());
                            this.f22590i.setLength(0);
                            return;
                        }
                        return;
                    default:
                        return;
                }
            }
            this.f22583b = ((g.n0) this.f22583b).f22470b;
        }
    }

    private static List p0(String str) {
        if (str.length() != 0) {
            ArrayList arrayList = new ArrayList(1);
            i iVar = new i(str);
            iVar.A();
            while (!iVar.h()) {
                float n10 = iVar.n();
                if (!Float.isNaN(n10)) {
                    g.d1 v10 = iVar.v();
                    if (v10 == null) {
                        v10 = g.d1.px;
                    }
                    arrayList.add(new g.p(n10, v10));
                    iVar.z();
                } else {
                    throw new f6.j("Invalid length list value: " + iVar.b());
                }
            }
            return arrayList;
        }
        throw new f6.j("Invalid length list (empty string)");
    }

    private void q(Attributes attributes) {
        l("<g>", new Object[0]);
        if (this.f22583b != null) {
            g.m mVar = new g.m();
            mVar.f22469a = this.f22582a;
            mVar.f22470b = this.f22583b;
            D(mVar, attributes);
            S(mVar, attributes);
            W(mVar, attributes);
            C(mVar, attributes);
            this.f22583b.g(mVar);
            this.f22583b = mVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.p q0(i iVar) {
        if (iVar.g("auto")) {
            return new g.p(0.0f);
        }
        return iVar.p();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void r(String str, Map map) {
        if (str.equals("xml-stylesheet")) {
            f6.g.k();
        }
    }

    private static Float r0(String str) {
        try {
            float f02 = f0(str);
            float f10 = 0.0f;
            if (f02 >= 0.0f) {
                f10 = 1.0f;
                if (f02 > 1.0f) {
                }
                return Float.valueOf(f02);
            }
            f02 = f10;
            return Float.valueOf(f02);
        } catch (f6.j unused) {
            return null;
        }
    }

    private static int s(float f10, float f11, float f12) {
        float f13;
        float f14 = 0.0f;
        int i10 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
        float f15 = f10 % 360.0f;
        if (i10 < 0) {
            f15 += 360.0f;
        }
        float f16 = f15 / 60.0f;
        float f17 = f11 / 100.0f;
        float f18 = f12 / 100.0f;
        if (f17 < 0.0f) {
            f17 = 0.0f;
        } else if (f17 > 1.0f) {
            f17 = 1.0f;
        }
        if (f18 >= 0.0f) {
            if (f18 > 1.0f) {
                f14 = 1.0f;
            } else {
                f14 = f18;
            }
        }
        if (f14 <= 0.5f) {
            f13 = (f17 + 1.0f) * f14;
        } else {
            f13 = (f14 + f17) - (f17 * f14);
        }
        float f19 = (f14 * 2.0f) - f13;
        return j(t(f19, f13, f16 - 2.0f) * 256.0f) | (j(t(f19, f13, f16 + 2.0f) * 256.0f) << 16) | (j(t(f19, f13, f16) * 256.0f) << 8);
    }

    private static Boolean s0(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1217487446:
                if (str.equals(ViewProps.HIDDEN)) {
                    c10 = 0;
                    break;
                }
                break;
            case -907680051:
                if (str.equals(ViewProps.SCROLL)) {
                    c10 = 1;
                    break;
                }
                break;
            case 3005871:
                if (str.equals("auto")) {
                    c10 = 2;
                    break;
                }
                break;
            case 466743410:
                if (str.equals(ViewProps.VISIBLE)) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
                return Boolean.FALSE;
            case 2:
            case 3:
                return Boolean.TRUE;
            default:
                return null;
        }
    }

    private static float t(float f10, float f11, float f12) {
        float f13;
        if (f12 < 0.0f) {
            f12 += 6.0f;
        }
        if (f12 >= 6.0f) {
            f12 -= 6.0f;
        }
        if (f12 < 1.0f) {
            f13 = (f11 - f10) * f12;
        } else if (f12 < 3.0f) {
            return f11;
        } else {
            if (f12 < 4.0f) {
                f13 = (f11 - f10) * (4.0f - f12);
            } else {
                return f10;
            }
        }
        return f13 + f10;
    }

    private static g.o0 t0(String str) {
        if (str.startsWith("url(")) {
            int indexOf = str.indexOf(")");
            g.o0 o0Var = null;
            if (indexOf != -1) {
                String trim = str.substring(4, indexOf).trim();
                String trim2 = str.substring(indexOf + 1).trim();
                if (trim2.length() > 0) {
                    o0Var = d0(trim2);
                }
                return new g.u(trim, o0Var);
            }
            return new g.u(str.substring(4).trim(), null);
        }
        return d0(str);
    }

    private void u(Attributes attributes) {
        l("<image>", new Object[0]);
        if (this.f22583b != null) {
            g.o oVar = new g.o();
            oVar.f22469a = this.f22582a;
            oVar.f22470b = this.f22583b;
            D(oVar, attributes);
            S(oVar, attributes);
            W(oVar, attributes);
            C(oVar, attributes);
            G(oVar, attributes);
            this.f22583b.g(oVar);
            this.f22583b = oVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    /* JADX WARN: Code restructure failed: missing block: B:105:0x02a9, code lost:
        return r1;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static f6.g.w u0(java.lang.String r19) {
        /*
            Method dump skipped, instructions count: 764
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.k.u0(java.lang.String):f6.g$w");
    }

    private void v(Attributes attributes) {
        l("<line>", new Object[0]);
        if (this.f22583b != null) {
            g.q qVar = new g.q();
            qVar.f22469a = this.f22582a;
            qVar.f22470b = this.f22583b;
            D(qVar, attributes);
            S(qVar, attributes);
            W(qVar, attributes);
            C(qVar, attributes);
            H(qVar, attributes);
            this.f22583b.g(qVar);
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    static f6.e v0(String str) {
        e.b bVar;
        i iVar = new i(str);
        iVar.A();
        String r10 = iVar.r();
        if ("defer".equals(r10)) {
            iVar.A();
            r10 = iVar.r();
        }
        e.a a10 = b.a(r10);
        iVar.A();
        if (!iVar.h()) {
            String r11 = iVar.r();
            r11.getClass();
            if (!r11.equals("meet")) {
                if (r11.equals("slice")) {
                    bVar = e.b.slice;
                } else {
                    throw new f6.j("Invalid preserveAspectRatio definition: " + str);
                }
            } else {
                bVar = e.b.meet;
            }
        } else {
            bVar = null;
        }
        return new f6.e(a10, bVar);
    }

    private void w(Attributes attributes) {
        l("<linearGradient>", new Object[0]);
        if (this.f22583b != null) {
            g.m0 m0Var = new g.m0();
            m0Var.f22469a = this.f22582a;
            m0Var.f22470b = this.f22583b;
            D(m0Var, attributes);
            S(m0Var, attributes);
            F(m0Var, attributes);
            I(m0Var, attributes);
            this.f22583b.g(m0Var);
            this.f22583b = m0Var;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static void w0(g.p0 p0Var, String str) {
        p0Var.f22479o = v0(str);
    }

    private void x(Attributes attributes) {
        l("<marker>", new Object[0]);
        if (this.f22583b != null) {
            g.r rVar = new g.r();
            rVar.f22469a = this.f22582a;
            rVar.f22470b = this.f22583b;
            D(rVar, attributes);
            S(rVar, attributes);
            C(rVar, attributes);
            Y(rVar, attributes);
            J(rVar, attributes);
            this.f22583b.g(rVar);
            this.f22583b = rVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Map x0(i iVar) {
        HashMap hashMap = new HashMap();
        iVar.A();
        String s10 = iVar.s('=');
        while (s10 != null) {
            iVar.f('=');
            hashMap.put(s10, iVar.q());
            iVar.A();
            s10 = iVar.s('=');
        }
        return hashMap;
    }

    private void y(Attributes attributes) {
        l("<mask>", new Object[0]);
        if (this.f22583b != null) {
            g.s sVar = new g.s();
            sVar.f22469a = this.f22582a;
            sVar.f22470b = this.f22583b;
            D(sVar, attributes);
            S(sVar, attributes);
            C(sVar, attributes);
            K(sVar, attributes);
            this.f22583b.g(sVar);
            this.f22583b = sVar;
            return;
        }
        throw new f6.j("Invalid document. Root element must be <svg>");
    }

    private static g.e0.e y0(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -933002398:
                if (str.equals("optimizeQuality")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3005871:
                if (str.equals("auto")) {
                    c10 = 1;
                    break;
                }
                break;
            case 362741610:
                if (str.equals("optimizeSpeed")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return g.e0.e.optimizeQuality;
            case 1:
                return g.e0.e.auto;
            case 2:
                return g.e0.e.optimizeSpeed;
            default:
                return null;
        }
    }

    private static Set z0(String str) {
        i iVar = new i(str);
        HashSet hashSet = new HashSet();
        while (!iVar.h()) {
            String r10 = iVar.r();
            if (r10.startsWith("http://www.w3.org/TR/SVG11/feature#")) {
                hashSet.add(r10.substring(35));
            } else {
                hashSet.add("UNSUPPORTED");
            }
            iVar.A();
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f6.g z(InputStream inputStream, boolean z10) {
        if (!inputStream.markSupported()) {
            inputStream = new BufferedInputStream(inputStream);
        }
        try {
            inputStream.mark(3);
            int read = inputStream.read() + (inputStream.read() << 8);
            inputStream.reset();
            if (read == 35615) {
                inputStream = new BufferedInputStream(new GZIPInputStream(inputStream));
            }
        } catch (IOException unused) {
        }
        try {
            inputStream.mark(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            L0(inputStream, z10);
            return this.f22582a;
        } finally {
            try {
                inputStream.close();
            } catch (IOException unused2) {
                Log.e("SVGParser", "Exception thrown closing input stream");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void o() {
    }

    private void l(String str, Object... objArr) {
    }
}
