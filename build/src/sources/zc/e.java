package zc;

import com.reactnativecommunity.clipboard.ClipboardModule;
import java.io.StringReader;
import mc.l0;
import oe.y;
import oe.y0;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;
import qi.s;
import zc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final String[] f56356a = {"Camera:MotionPhoto", "GCamera:MotionPhoto", "Camera:MicroVideo", "GCamera:MicroVideo"};

    /* renamed from: b  reason: collision with root package name */
    private static final String[] f56357b = {"Camera:MotionPhotoPresentationTimestampUs", "GCamera:MotionPhotoPresentationTimestampUs", "Camera:MicroVideoPresentationTimestampUs", "GCamera:MicroVideoPresentationTimestampUs"};

    /* renamed from: c  reason: collision with root package name */
    private static final String[] f56358c = {"Camera:MicroVideoOffset", "GCamera:MicroVideoOffset"};

    public static b a(String str) {
        try {
            return b(str);
        } catch (NumberFormatException | l0 | XmlPullParserException unused) {
            y.i("MotionPhotoXmpParser", "Ignoring unexpected XMP metadata");
            return null;
        }
    }

    private static b b(String str) {
        XmlPullParser newPullParser = XmlPullParserFactory.newInstance().newPullParser();
        newPullParser.setInput(new StringReader(str));
        newPullParser.next();
        if (y0.f(newPullParser, "x:xmpmeta")) {
            s t10 = s.t();
            long j10 = -9223372036854775807L;
            do {
                newPullParser.next();
                if (y0.f(newPullParser, "rdf:Description")) {
                    if (!d(newPullParser)) {
                        return null;
                    }
                    j10 = e(newPullParser);
                    t10 = c(newPullParser);
                } else if (y0.f(newPullParser, "Container:Directory")) {
                    t10 = f(newPullParser, "Container", "Item");
                } else if (y0.f(newPullParser, "GContainer:Directory")) {
                    t10 = f(newPullParser, "GContainer", "GContainerItem");
                }
            } while (!y0.d(newPullParser, "x:xmpmeta"));
            if (t10.isEmpty()) {
                return null;
            }
            return new b(j10, t10);
        }
        throw l0.a("Couldn't find xmp metadata", null);
    }

    private static s c(XmlPullParser xmlPullParser) {
        for (String str : f56358c) {
            String a10 = y0.a(xmlPullParser, str);
            if (a10 != null) {
                return s.v(new b.a(ClipboardModule.MIMETYPE_JPEG, "Primary", 0L, 0L), new b.a("video/mp4", "MotionPhoto", Long.parseLong(a10), 0L));
            }
        }
        return s.t();
    }

    private static boolean d(XmlPullParser xmlPullParser) {
        for (String str : f56356a) {
            String a10 = y0.a(xmlPullParser, str);
            if (a10 != null) {
                if (Integer.parseInt(a10) != 1) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    private static long e(XmlPullParser xmlPullParser) {
        for (String str : f56357b) {
            String a10 = y0.a(xmlPullParser, str);
            if (a10 != null) {
                long parseLong = Long.parseLong(a10);
                if (parseLong == -1) {
                    return -9223372036854775807L;
                }
                return parseLong;
            }
        }
        return -9223372036854775807L;
    }

    private static s f(XmlPullParser xmlPullParser, String str, String str2) {
        long j10;
        s.a k10 = s.k();
        String str3 = str + ":Item";
        String str4 = str + ":Directory";
        do {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, str3)) {
                String a10 = y0.a(xmlPullParser, str2 + ":Mime");
                String a11 = y0.a(xmlPullParser, str2 + ":Semantic");
                String a12 = y0.a(xmlPullParser, str2 + ":Length");
                String a13 = y0.a(xmlPullParser, str2 + ":Padding");
                if (a10 != null && a11 != null) {
                    long j11 = 0;
                    if (a12 != null) {
                        j10 = Long.parseLong(a12);
                    } else {
                        j10 = 0;
                    }
                    if (a13 != null) {
                        j11 = Long.parseLong(a13);
                    }
                    k10.a(new b.a(a10, a11, j10, j11));
                } else {
                    return s.t();
                }
            }
        } while (!y0.d(xmlPullParser, str4));
        return k10.k();
    }
}
