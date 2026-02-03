package oa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends y8.b {
    protected abstract void onNewResultImpl(Bitmap bitmap);

    @Override // y8.b
    public void onNewResultImpl(DataSource dataSource) {
        if (dataSource.isFinished()) {
            CloseableReference closeableReference = (CloseableReference) dataSource.getResult();
            try {
                onNewResultImpl((closeableReference == null || !(closeableReference.F0() instanceof sa.d)) ? null : ((sa.d) closeableReference.F0()).N1());
            } finally {
                CloseableReference.N(closeableReference);
            }
        }
    }
}
