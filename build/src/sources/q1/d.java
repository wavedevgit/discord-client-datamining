package q1;

import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.XmlResourceParser;
import android.graphics.Shader;
import android.util.AttributeSet;
import android.util.Log;
import android.util.Xml;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Shader f47298a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f47299b;

    /* renamed from: c  reason: collision with root package name */
    private int f47300c;

    private d(Shader shader, ColorStateList colorStateList, int i10) {
        this.f47298a = shader;
        this.f47299b = colorStateList;
        this.f47300c = i10;
    }

    private static d a(Resources resources, int i10, Resources.Theme theme) {
        int next;
        XmlResourceParser xml = resources.getXml(i10);
        AttributeSet asAttributeSet = Xml.asAttributeSet(xml);
        do {
            next = xml.next();
            if (next == 2) {
                break;
            }
        } while (next != 1);
        if (next == 2) {
            String name = xml.getName();
            name.getClass();
            if (!name.equals("gradient")) {
                if (name.equals("selector")) {
                    return c(c.b(resources, xml, asAttributeSet, theme));
                }
                throw new XmlPullParserException(xml.getPositionDescription() + ": unsupported complex color tag " + name);
            }
            return d(h.b(resources, xml, asAttributeSet, theme));
        }
        throw new XmlPullParserException("No start tag found");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d b(int i10) {
        return new d(null, null, i10);
    }

    static d c(ColorStateList colorStateList) {
        return new d(null, colorStateList, colorStateList.getDefaultColor());
    }

    static d d(Shader shader) {
        return new d(shader, null, 0);
    }

    public static d g(Resources resources, int i10, Resources.Theme theme) {
        try {
            return a(resources, i10, theme);
        } catch (Exception e10) {
            Log.e("ComplexColorCompat", "Failed to inflate ComplexColor.", e10);
            return null;
        }
    }

    public int e() {
        return this.f47300c;
    }

    public Shader f() {
        return this.f47298a;
    }

    public boolean h() {
        if (this.f47298a != null) {
            return true;
        }
        return false;
    }

    public boolean i() {
        ColorStateList colorStateList;
        if (this.f47298a == null && (colorStateList = this.f47299b) != null && colorStateList.isStateful()) {
            return true;
        }
        return false;
    }

    public boolean j(int[] iArr) {
        if (i()) {
            ColorStateList colorStateList = this.f47299b;
            int colorForState = colorStateList.getColorForState(iArr, colorStateList.getDefaultColor());
            if (colorForState != this.f47300c) {
                this.f47300c = colorForState;
                return true;
            }
            return false;
        }
        return false;
    }

    public void k(int i10) {
        this.f47300c = i10;
    }

    public boolean l() {
        if (!h() && this.f47300c == 0) {
            return false;
        }
        return true;
    }
}
