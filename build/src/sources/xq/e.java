package xq;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    public static void a(String str, String str2) {
        Throwable th2;
        FileChannel fileChannel;
        if (!str.equalsIgnoreCase(str2)) {
            FileChannel fileChannel2 = null;
            try {
                FileChannel channel = new FileInputStream(new File(str)).getChannel();
                try {
                    fileChannel = new FileOutputStream(new File(str2)).getChannel();
                    try {
                        channel.transferTo(0L, channel.size(), fileChannel);
                        channel.close();
                        channel.close();
                        if (fileChannel != null) {
                            fileChannel.close();
                        }
                    } catch (Throwable th3) {
                        th2 = th3;
                        fileChannel2 = channel;
                        if (fileChannel2 != null) {
                            fileChannel2.close();
                        }
                        if (fileChannel != null) {
                            fileChannel.close();
                        }
                        throw th2;
                    }
                } catch (Throwable th4) {
                    th2 = th4;
                    fileChannel = null;
                }
            } catch (Throwable th5) {
                th2 = th5;
                fileChannel = null;
            }
        }
    }
}
