package jl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends g {
    public f(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // jl.g
    public String e() {
        return "LLLL";
    }

    @Override // jl.g
    public Paint.Align k() {
        return Paint.Align.LEFT;
    }

    @Override // jl.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        Calendar calendar = Calendar.getInstance();
        calendar.set(2, 0);
        for (int i10 = 0; i10 <= 11; i10++) {
            arrayList.add(h(calendar));
            calendar.add(2, 1);
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
        return true;
    }
}
