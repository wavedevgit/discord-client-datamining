package mt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f39404a;

    /* renamed from: b  reason: collision with root package name */
    private String f39405b;

    /* renamed from: c  reason: collision with root package name */
    private kt.q f39406c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f39407d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f39404a.setErrorIndex(-1);
        this.f39405b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f39407d = false;
    }

    public int c() {
        return this.f39404a.getErrorIndex();
    }

    public String d() {
        return this.f39405b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f39404a;
    }

    public int f() {
        return this.f39404a.getIndex();
    }

    public kt.q g() {
        if (this.f39406c == null) {
            this.f39406c = new v(0, false);
        }
        return this.f39406c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.q h() {
        return this.f39406c;
    }

    public boolean i() {
        if (this.f39404a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f39407d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f39405b = str;
            this.f39404a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f39404a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(kt.q qVar) {
        this.f39406c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f39405b = "Warning state active.";
            this.f39404a.setErrorIndex(f());
        }
        this.f39407d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f39405b);
        sb2.append('\"');
        if (this.f39407d) {
            sb2.append(", warning-active");
        }
        if (this.f39406c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f39406c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f39404a = new ParsePosition(i10);
            this.f39405b = "";
            this.f39406c = null;
            this.f39407d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
