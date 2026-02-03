package ot;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.text.ParsePosition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s {

    /* renamed from: a  reason: collision with root package name */
    private ParsePosition f44759a;

    /* renamed from: b  reason: collision with root package name */
    private String f44760b;

    /* renamed from: c  reason: collision with root package name */
    private mt.q f44761c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f44762d;

    public s() {
        this(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        this.f44759a.setErrorIndex(-1);
        this.f44760b = "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f44762d = false;
    }

    public int c() {
        return this.f44759a.getErrorIndex();
    }

    public String d() {
        return this.f44760b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ParsePosition e() {
        return this.f44759a;
    }

    public int f() {
        return this.f44759a.getIndex();
    }

    public mt.q g() {
        if (this.f44761c == null) {
            this.f44761c = new v(0, false);
        }
        return this.f44761c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public mt.q h() {
        return this.f44761c;
    }

    public boolean i() {
        if (this.f44759a.getErrorIndex() != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f44762d;
    }

    public void k(int i10, String str) {
        if (i10 >= 0) {
            if (str == null || str.isEmpty()) {
                str = "Error occurred at position: " + i10;
            }
            this.f44760b = str;
            this.f44759a.setErrorIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined error index: " + i10);
    }

    public void l(int i10) {
        if (i10 >= 0) {
            this.f44759a.setIndex(i10);
            return;
        }
        throw new IllegalArgumentException("Undefined position: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(mt.q qVar) {
        this.f44761c = qVar;
    }

    public void n() {
        if (!i()) {
            this.f44760b = "Warning state active.";
            this.f44759a.setErrorIndex(f());
        }
        this.f44762d = true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[position=");
        sb2.append(f());
        sb2.append(", error-index=");
        sb2.append(c());
        sb2.append(", error-message=\"");
        sb2.append(this.f44760b);
        sb2.append('\"');
        if (this.f44762d) {
            sb2.append(", warning-active");
        }
        if (this.f44761c != null) {
            sb2.append(", raw-values=");
            sb2.append(this.f44761c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    public s(int i10) {
        if (i10 >= 0) {
            this.f44759a = new ParsePosition(i10);
            this.f44760b = "";
            this.f44761c = null;
            this.f44762d = false;
            return;
        }
        throw new IllegalArgumentException("Undefined: " + i10);
    }
}
