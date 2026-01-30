package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f37704a;

    /* renamed from: b  reason: collision with root package name */
    private String f37705b;

    /* renamed from: c  reason: collision with root package name */
    private jt.q f37706c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37707d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f37704a.setErrorIndex(-1);
        this.f37705b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f37707d = false;
    }

    public int c() {
        return this.f37704a.getErrorIndex();
    }

    public String d() {
        return this.f37705b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f37704a;
    }

    public int f() {
        return this.f37704a.getIndex();
    }

    public jt.q g() {
        if (this.f37706c == null) {
            this.f37706c = new v(0, false);
        }
        return this.f37706c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.q h() {
        return this.f37706c;
    }

    public boolean i() {
        if (this.f37704a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f37707d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f37705b = str;
            this.f37704a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f37704a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(jt.q qVar) {
        this.f37706c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f37705b = "Warning state active.";
            this.f37704a.setErrorIndex(f());
        }
        this.f37707d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f37705b);
        sb2.append('\"');
        if (this.f37707d) {
            sb2.append(", warning-active");
        }
        if (this.f37706c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f37706c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f37704a = new ParsePosition(i10);
            this.f37705b = "";
            this.f37706c = null;
            this.f37707d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
