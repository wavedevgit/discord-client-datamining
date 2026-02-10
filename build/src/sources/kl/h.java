package kl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends g {

    /* renamed from: f  reason: collision with root package name */
    private int f30948f;

    /* renamed from: g  reason: collision with root package name */
    private int f30949g;

    public h(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f30948f = 1900;
        this.f30949g = 2100;
    }

    private int w() {
        if (this.f30943a.w() == null) {
            return this.f30949g;
        }
        return this.f30943a.w().get(1);
    }

    private int x() {
        if (this.f30943a.x() == null) {
            return this.f30948f;
        }
        return this.f30943a.x().get(1);
    }

    @Override // kl.g
    public String e() {
        return com.henninghall.date_picker.h.g(this.f30943a.v());
    }

    @Override // kl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // kl.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        Calendar calendar = Calendar.getInstance();
        int x10 = x();
        int w10 = w() - x10;
        calendar.set(1, x10);
        for (int i10 = 0; i10 <= w10; i10++) {
            arrayList.add(h(calendar));
            calendar.add(1, 1);
        }
        return arrayList;
    }

    @Override // kl.g
    public boolean u() {
        if (this.f30943a.z() == gl.b.date) {
            return true;
        }
        return false;
    }

    @Override // kl.g
    public boolean v() {
        return false;
    }
}
