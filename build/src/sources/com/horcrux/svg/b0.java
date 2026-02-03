package com.horcrux.svg;

import android.graphics.Paint;
import android.graphics.Path;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f17463a;

    /* renamed from: b  reason: collision with root package name */
    private final int[][] f17464b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f17465c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(Paint paint) {
        ArrayList arrayList = new ArrayList();
        this.f17463a = arrayList;
        this.f17464b = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        this.f17465c = paint;
        arrayList.add(new Path());
    }

    private int a(char c10) {
        int[] iArr = this.f17464b[c10 >> '\b'];
        if (iArr == null) {
            return 0;
        }
        return iArr[c10 & 255];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path b(char c10, String str) {
        Path path;
        int a10 = a(c10);
        if (a10 != 0) {
            path = (Path) this.f17463a.get(a10);
        } else {
            Path path2 = new Path();
            this.f17465c.getTextPath(str, 0, 1, 0.0f, 0.0f, path2);
            int[][] iArr = this.f17464b;
            int i10 = c10 >> '\b';
            int[] iArr2 = iArr[i10];
            if (iArr2 == null) {
                iArr2 = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
                iArr[i10] = iArr2;
            }
            iArr2[c10 & 255] = this.f17463a.size();
            this.f17463a.add(path2);
            path = path2;
        }
        Path path3 = new Path();
        path3.addPath(path);
        return path3;
    }
}
