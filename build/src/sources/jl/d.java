package jl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends g {

    /* renamed from: f  reason: collision with root package name */
    private final com.henninghall.date_picker.g f29991f;

    public d(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f29991f = new com.henninghall.date_picker.g(this.f29992a);
    }

    @Override // jl.g
    public String e() {
        if (this.f29992a.f16697o.g()) {
            return "h";
        }
        return "HH";
    }

    @Override // jl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // jl.g
    public ArrayList n() {
        int i10;
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        if (this.f29992a.f16697o.g()) {
            i10 = 12;
        } else {
            i10 = 24;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            arrayList.add(this.f29996e.format(calendar.getTime()));
            calendar.add(11, 1);
        }
        return arrayList;
    }

    @Override // jl.g
    public String s(String str) {
        return this.f29991f.b(str);
    }

    @Override // jl.g
    public boolean u() {
        if (this.f29992a.z() != fl.b.date) {
            return true;
        }
        return false;
    }

    @Override // jl.g
    public boolean v() {
        return true;
    }
}
