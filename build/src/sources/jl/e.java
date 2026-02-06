package jl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends g {
    public e(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
    }

    @Override // jl.g
    public String e() {
        return "mm";
    }

    @Override // jl.g
    public Paint.Align k() {
        if (this.f29944a.f16697o.f()) {
            return Paint.Align.LEFT;
        }
        return Paint.Align.RIGHT;
    }

    @Override // jl.g
    public ArrayList n() {
        Calendar calendar = Calendar.getInstance();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        calendar.set(12, 0);
        while (i10 < 60) {
            arrayList.add(this.f29948e.format(calendar.getTime()));
            calendar.add(12, this.f29944a.y());
            i10 += this.f29944a.y();
        }
        return arrayList;
    }

    @Override // jl.g
    public boolean u() {
        if (this.f29944a.z() != fl.b.date) {
            return true;
        }
        return false;
    }

    @Override // jl.g
    public boolean v() {
        return true;
    }
}
