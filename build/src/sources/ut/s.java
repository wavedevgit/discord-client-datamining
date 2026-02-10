package ut;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f52024a;

    /* renamed from: b  reason: collision with root package name */
    private String f52025b;

    /* renamed from: c  reason: collision with root package name */
    private st.q f52026c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52027d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f52024a.setErrorIndex(-1);
        this.f52025b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f52027d = false;
    }

    public int c() {
        return this.f52024a.getErrorIndex();
    }

    public String d() {
        return this.f52025b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f52024a;
    }

    public int f() {
        return this.f52024a.getIndex();
    }

    public st.q g() {
        if (this.f52026c == null) {
            this.f52026c = new v(0, false);
        }
        return this.f52026c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.q h() {
        return this.f52026c;
    }

    public boolean i() {
        if (this.f52024a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f52027d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f52025b = str;
            this.f52024a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f52024a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(st.q qVar) {
        this.f52026c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f52025b = "Warning state active.";
            this.f52024a.setErrorIndex(f());
        }
        this.f52027d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f52025b);
        sb2.append('\"');
        if (this.f52027d) {
            sb2.append(", warning-active");
        }
        if (this.f52026c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f52026c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f52024a = new ParsePosition(i10);
            this.f52025b = "";
            this.f52026c = null;
            this.f52027d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
