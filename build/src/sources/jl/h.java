package jl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends g {

    /* renamed from: f  reason: collision with root package name */
    private int f29997f;

    /* renamed from: g  reason: collision with root package name */
    private int f29998g;

    public h(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f29997f = 1900;
        this.f29998g = 2100;
    }

    private int w() {
        if (this.f29992a.w() == null) {
            return this.f29998g;
        }
        return this.f29992a.w().get(1);
    }

    private int x() {
        if (this.f29992a.x() == null) {
            return this.f29997f;
        }
        return this.f29992a.x().get(1);
    }

    @Override // jl.g
    public String e() {
        return com.henninghall.date_picker.h.g(this.f29992a.v());
    }

    @Override // jl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // jl.g
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

    @Override // jl.g
    public boolean u() {
        if (this.f29992a.z() == fl.b.date) {
            return true;
        }
        return false;
    }

    @Override // jl.g
    public boolean v() {
        return false;
    }
}
