package ui;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r extends s {

    /* renamed from: d  reason: collision with root package name */
    private final List f51601d;

    public r(List list) {
        super("Dependency cycle detected: " + Arrays.toString(list.toArray()));
        this.f51601d = list;
    }
}
