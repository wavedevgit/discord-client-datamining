package y8;

import com.facebook.datasource.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {
    void onCancellation(DataSource dataSource);

    void onFailure(DataSource dataSource);

    void onNewResult(DataSource dataSource);

    void onProgressUpdate(DataSource dataSource);
}
