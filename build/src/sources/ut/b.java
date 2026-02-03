package ut;

import java.io.IOException;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b {
    void onFailure(Call call, IOException iOException);

    void onResponse(Call call, Response response);
}
