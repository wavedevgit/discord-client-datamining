package tt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f51119a;

    /* renamed from: b  reason: collision with root package name */
    private String f51120b;

    /* renamed from: c  reason: collision with root package name */
    private rt.q f51121c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51122d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f51119a.setErrorIndex(-1);
        this.f51120b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f51122d = false;
    }

    public int c() {
        return this.f51119a.getErrorIndex();
    }

    public String d() {
        return this.f51120b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f51119a;
    }

    public int f() {
        return this.f51119a.getIndex();
    }

    public rt.q g() {
        if (this.f51121c == null) {
            this.f51121c = new v(0, false);
        }
        return this.f51121c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public rt.q h() {
        return this.f51121c;
    }

    public boolean i() {
        if (this.f51119a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f51122d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f51120b = str;
            this.f51119a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f51119a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(rt.q qVar) {
        this.f51121c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f51120b = "Warning state active.";
            this.f51119a.setErrorIndex(f());
        }
        this.f51122d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f51120b);
        sb2.append('\"');
        if (this.f51122d) {
            sb2.append(", warning-active");
        }
        if (this.f51121c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f51121c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f51119a = new ParsePosition(i10);
            this.f51120b = "";
            this.f51121c = null;
            this.f51122d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
