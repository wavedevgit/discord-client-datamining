package hl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends g {

    /* renamed from: f  reason: collision with root package name */
    private int f25953f;

    /* renamed from: g  reason: collision with root package name */
    private int f25954g;

    public h(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f25953f = 1900;
        this.f25954g = 2100;
    }

    private int w() {
        if (this.f25948a.w() == null) {
            return this.f25954g;
        }
        return this.f25948a.w().get(1);
    }

    private int x() {
        if (this.f25948a.x() == null) {
            return this.f25953f;
        }
        return this.f25948a.x().get(1);
    }

    @Override // hl.g
    public String e() {
        return com.henninghall.date_picker.h.g(this.f25948a.v());
    }

    @Override // hl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // hl.g
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

    @Override // hl.g
    public boolean u() {
        if (this.f25948a.z() == dl.b.date) {
            return true;
        }
        return false;
    }

    @Override // hl.g
    public boolean v() {
        return false;
    }
}
