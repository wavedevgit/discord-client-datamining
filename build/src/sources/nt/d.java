package nt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends mt.e {

    /* renamed from: d  reason: collision with root package name */
    private static final Map f42073d;

    static {
        HashMap hashMap = new HashMap();
        hashMap.put("YEAR_OF_DISPLAY", "L_year");
        hashMap.put("MONTH_AS_NUMBER", "L_month");
        hashMap.put("HOUR_FROM_0_TO_24", "L_hour");
        hashMap.put("DAY_OF_MONTH", "L_day");
        hashMap.put("DAY_OF_DIVISION", "L_day");
        f42073d = Collections.unmodifiableMap(hashMap);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d(String str) {
        super(str);
    }
}
