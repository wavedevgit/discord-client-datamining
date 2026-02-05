package rt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f49208a;

    /* renamed from: b  reason: collision with root package name */
    private String f49209b;

    /* renamed from: c  reason: collision with root package name */
    private pt.q f49210c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f49211d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f49208a.setErrorIndex(-1);
        this.f49209b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f49211d = false;
    }

    public int c() {
        return this.f49208a.getErrorIndex();
    }

    public String d() {
        return this.f49209b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f49208a;
    }

    public int f() {
        return this.f49208a.getIndex();
    }

    public pt.q g() {
        if (this.f49210c == null) {
            this.f49210c = new v(0, false);
        }
        return this.f49210c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pt.q h() {
        return this.f49210c;
    }

    public boolean i() {
        if (this.f49208a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f49211d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f49209b = str;
            this.f49208a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f49208a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(pt.q qVar) {
        this.f49210c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f49209b = "Warning state active.";
            this.f49208a.setErrorIndex(f());
        }
        this.f49211d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f49209b);
        sb2.append('\"');
        if (this.f49211d) {
            sb2.append(", warning-active");
        }
        if (this.f49210c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f49210c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f49208a = new ParsePosition(i10);
            this.f49209b = "";
            this.f49210c = null;
            this.f49211d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
