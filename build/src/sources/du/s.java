package du;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f22127a;

    /* renamed from: b  reason: collision with root package name */
    private String f22128b;

    /* renamed from: c  reason: collision with root package name */
    private bu.q f22129c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f22130d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f22127a.setErrorIndex(-1);
        this.f22128b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f22130d = false;
    }

    public int c() {
        return this.f22127a.getErrorIndex();
    }

    public String d() {
        return this.f22128b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f22127a;
    }

    public int f() {
        return this.f22127a.getIndex();
    }

    public bu.q g() {
        if (this.f22129c == null) {
            this.f22129c = new v(0, false);
        }
        return this.f22129c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.q h() {
        return this.f22129c;
    }

    public boolean i() {
        if (this.f22127a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f22130d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f22128b = str;
            this.f22127a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f22127a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(bu.q qVar) {
        this.f22129c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f22128b = "Warning state active.";
            this.f22127a.setErrorIndex(f());
        }
        this.f22130d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f22128b);
        sb2.append('\"');
        if (this.f22130d) {
            sb2.append(", warning-active");
        }
        if (this.f22129c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f22129c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f22127a = new ParsePosition(i10);
            this.f22128b = "";
            this.f22129c = null;
            this.f22130d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
