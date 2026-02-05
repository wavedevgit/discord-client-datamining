package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object[] a(Object[] objArr, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (objArr[i11] == null) {
                StringBuilder sb2 = new StringBuilder(String.valueOf(i11).length() + 9);
                sb2.append("at index ");
                sb2.append(i11);
                throw new NullPointerException(sb2.toString());
            }
        }
        return objArr;
    }
}
