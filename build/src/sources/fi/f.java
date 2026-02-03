package fi;

import android.content.res.AssetManager;
import java.io.File;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final di.b f24414a;

    /* renamed from: b  reason: collision with root package name */
    private XmlPullParser f24415b;

    public f(di.b bVar) {
        this.f24414a = bVar;
    }

    public final long a() {
        if (this.f24415b != null) {
            while (true) {
                int next = this.f24415b.next();
                if (next != 2) {
                    if (next == 1) {
                        break;
                    }
                } else if (this.f24415b.getName().equals("manifest")) {
                    String attributeValue = this.f24415b.getAttributeValue("http://schemas.android.com/apk/res/android", "versionCode");
                    String attributeValue2 = this.f24415b.getAttributeValue("http://schemas.android.com/apk/res/android", "versionCodeMajor");
                    if (attributeValue != null) {
                        try {
                            int parseInt = Integer.parseInt(attributeValue);
                            if (attributeValue2 == null) {
                                return parseInt;
                            }
                            try {
                                return (Integer.parseInt(attributeValue2) << 32) | (parseInt & 4294967295L);
                            } catch (NumberFormatException e10) {
                                throw new XmlPullParserException(String.format("Couldn't parse versionCodeMajor to int: %s", e10.getMessage()));
                            }
                        } catch (NumberFormatException e11) {
                            throw new XmlPullParserException(String.format("Couldn't parse versionCode to int: %s", e11.getMessage()));
                        }
                    }
                    throw new XmlPullParserException("Manifest entry doesn't contain 'versionCode' attribute.");
                }
            }
            throw new XmlPullParserException("Couldn't find manifest entry at top-level.");
        }
        throw new XmlPullParserException("Manifest file needs to be loaded before parsing.");
    }

    public final void b(AssetManager assetManager, File file) {
        this.f24415b = assetManager.openXmlResourceParser(di.b.c(assetManager, file), "AndroidManifest.xml");
    }
}
