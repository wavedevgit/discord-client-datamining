package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f37688a;

    /* renamed from: b  reason: collision with root package name */
    private String f37689b;

    /* renamed from: c  reason: collision with root package name */
    private jt.q f37690c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37691d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f37688a.setErrorIndex(-1);
        this.f37689b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f37691d = false;
    }

    public int c() {
        return this.f37688a.getErrorIndex();
    }

    public String d() {
        return this.f37689b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f37688a;
    }

    public int f() {
        return this.f37688a.getIndex();
    }

    public jt.q g() {
        if (this.f37690c == null) {
            this.f37690c = new v(0, false);
        }
        return this.f37690c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.q h() {
        return this.f37690c;
    }

    public boolean i() {
        if (this.f37688a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f37691d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f37689b = str;
            this.f37688a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f37688a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(jt.q qVar) {
        this.f37690c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f37689b = "Warning state active.";
            this.f37688a.setErrorIndex(f());
        }
        this.f37691d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f37689b);
        sb2.append('\"');
        if (this.f37691d) {
            sb2.append(", warning-active");
        }
        if (this.f37690c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f37690c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f37688a = new ParsePosition(i10);
            this.f37689b = "";
            this.f37690c = null;
            this.f37691d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
