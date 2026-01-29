package y8;

import com.facebook.datasource.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements e {
    @Override // y8.e
    public void onFailure(DataSource dataSource) {
        try {
            onFailureImpl(dataSource);
        } finally {
            dataSource.close();
        }
    }

    protected abstract void onFailureImpl(DataSource dataSource);

    @Override // y8.e
    public void onNewResult(DataSource dataSource) {
        boolean isFinished = dataSource.isFinished();
        try {
            onNewResultImpl(dataSource);
        } finally {
            if (isFinished) {
                dataSource.close();
            }
        }
    }

    protected abstract void onNewResultImpl(DataSource dataSource);

    @Override // y8.e
    public void onCancellation(DataSource dataSource) {
    }

    @Override // y8.e
    public void onProgressUpdate(DataSource dataSource) {
    }
}
